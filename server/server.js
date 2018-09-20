require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');

// Controllers
const auth_controller = require('./controllers/auth_controller');
const user_controller = require('./controllers/user_controller')

const app = express();

let {
    SERVER_PORT,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    REACT_APP_DOMAIN,
    CONNECTION_STRING,
    SESSION_SECRET,
    ENVIRONMENT
  } = process.env;

app.use(bodyParser.json());

massive(CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
    console.log("db connected")
}).catch( err => console.log("Massive", err) );

app.use( session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));

app.use((req, res, next) => {
  if (ENVIRONMENT === 'dev') {
    req.app.get('db').users.set_data().then(userData => {
      req.session.user = userData[0]
      next();
    })
  } else {
    next();
  }
})

app.use( express.static( `${__dirname}/../build` ) );

app.get('/auth/callback', async (req, res) => {
    let payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    let responseWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);

    let userData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${responseWithToken.data.access_token}`);

    let user_robot = (`https://robohash.org/${Math.floor(Math.random() * 999)}`);

    const db = req.app.get('db');
    const { sub, given_name, family_name, gender } = userData.data;

    let userExists = await db.users.find_user([sub]);
    if (userExists[0]) {
      req.session.user = userExists[0];
    } else {
      let createdUser = await db.users.create_user([sub, user_robot, given_name, family_name, gender]);
      req.session.user = createdUser[0]
    }
    res.redirect('http://localhost:3000/#/dash')
  });
  
// app.use(checkForDevelopment)

// Authorization controller
app.get('/api/getUser', auth_controller.getUser);
app.post('/auth/logout', auth_controller.logout);

// Friend controller
app.get('/api/searchDisplay' , user_controller.getOtherUsers);

// User controller
app.get('/api/displayUser', user_controller.displayUser);
app.put('/api/displayProfile/:id', user_controller.displayProfile);

// Recommended controller
app.get('/api/users', user_controller.mountRec);
app.post('/api/addFriend', user_controller.addFriend);
app.post('/api/removeFriend', user_controller.removeFriend);

app.listen( SERVER_PORT, () => { console.log(`Listening on port ${SERVER_PORT}.`); } )