const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const axios = require('axios');

const checkForDevelopment = require('./middleware/checkForDevelopment');
const checkForSessions = require('./middleware/checkForSessions');
const checkForAuth = require('./middleware/checkForAuth');

// Controllers
const auth_controller = require('./controllers/auth_controller');

const app = express();

let {
    SERVER_PORT,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    REACT_APP_DOMAIN,
    CONNECTION_STRING,
    SESSION_SECRET
  } = process.env;

app.use(bodyParser.json());
app.use( session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));

app.use(checkForSessions)

app.use( express.static( `${__dirname}/../build` ) );

massive(CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
    console.log("db connected")
}).catch( err => console.log("Massive", err) );

app.get('/auth/callback', async (req, res) => {
    let payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/auth/callback`
    };
    let responseWithToken = await axios.post(
      `https://${REACT_APP_DOMAIN}/oauth/token`,
      payload
    );
    let userData = await axios.get(
      `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
        responseWithToken.data.access_token
      }`
    );
    const db = req.app.get('db');
    let { sub, user_image, first_name, last_name, gender } = userData.data;
    let userExists = await db.users.find_user([sub]);
    if (userExists[0]) {
      req.session.user = userExists[0];
      res.redirect('http://localhost:3000/#/dash');
    } else {
      db.users.create_user([sub, user_image, first_name, last_name, gender]).then(createdUser => {
        req.session.user = createdUser[0];
        res.redirect('http://localhost:3000/#/dash');
      });
    }
  });
  
// app.use(checkForDevelopment)

// Authorization controller
app.get('/api/userData', (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(401).send('Nice try sucka');
  }
});

  app.post('/api/logout', auth_controller.logout)
// Friend controller

// User controller

// Recommended controller



app.listen( SERVER_PORT, () => { console.log(`Listening on port ${SERVER_PORT}.`); } )