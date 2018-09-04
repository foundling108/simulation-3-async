const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const checkForDevelopment = require('./middleware/checkForDevelopment');
const checkForSessions = require('./middleware/checkForSessions');
const checkForAuth = require('./middleware/checkForAuth');

// Controllers


const app = express();

app.use(bodyParser.json());
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }));

app.use(checkForSessions)

app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
    console.log("db connected")
}).catch( err => console.log("Massive", err) );

// app.use(checkForDevelopment)

// Authorization controller

// Friend controller

// User controller

// Recommended controller



const port =  process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port ${port}.`); } )