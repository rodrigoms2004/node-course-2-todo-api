'use strict'

var {User} = require('./../models/user');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

let userController = {

  // CREATE A USER
  create: async (req, res) => {
    try {
      const body = _.pick(req.body, ['email', 'password']);
      const user = new User(body);
      await user.save();
      const token = await user.generateAuthToken();
      res.header('x-auth', token).send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  },

  // VALIDATE A USER
  validate: (req, res) => {
    res.send(req.user);
  },

  // LOGIN A USER, CREATE A TOKEN
  login: async (req, res) => {
    try {
      const body = _.pick(req.body, ['email', 'password']);
      const user = await User.findByCredentials(body.email, body.password);
      const token = await user.generateAuthToken();
      res.header('x-auth', token).send(user);
    } catch (e) {
      res.status(400).send();
    }
  },

  // LOGOFF A USER, DELETE THE TOKEN

  logoff: async (req, res) => {
    try {
      await req.user.removeToken(req.token);
      res.status(200).send();
    } catch(e) {
      res.status(400).send();
    }
  }

};  // end userController

module.exports = userController;
