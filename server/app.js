require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();

app.use(bodyParser.json()); // middleware

//middleware, used to show where user is going...
app.use((req, res, next) => {
  // don't work under npm test
  if(process.env.NODE_ENV !== "test") {
    console.log('I was here: ', req.url)
  }

  next();
});

// ROUTES
app.use('/api', require('./route/api'));
  
// if use {app} get error in /server/bin/www.js
module.exports = app;
