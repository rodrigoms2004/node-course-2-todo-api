'use strict'

var {User} = require('./../models/user');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

let userController = {

  // CREATE A USER
  create: (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
      return user.generateAuthToken();
    }).then((token) => {
      res.header('x-auth', token).send(user);
    }).catch((e) => {
      res.status(400).send(e);
    });
  },

  // VALIDATE A USER
  validate: (req, res) => {
    res.send(req.user);
  },

  // LOGIN A USER, CREATE A TOKEN
  login: (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
      return user.generateAuthToken().then((token) => {
        res.header('x-auth', token).send(user);
      });
    }).catch((e) => {
      res.status(400).send();
    });
  },

  // LOGOFF A USER, DELETE THE TOKEN
  logoff: (req, res) => {
    req.user.removeToken(req.token).then(() => {
      res.status(200).send();
    }, () => {
      response.status(400).send();
    });
  }

};  // end userController

module.exports = userController;
