'use strict'

var {Todo} = require('./../models/todo');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

let todoController = {

  // CREATE A TODO
  create: (req, res) => {
    var todo = new Todo({
      text: req.body.text,
      completed: req.body.completed,
      completedAt: req.body.completedAt,
      _creator: req.user._id
    });

    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  },

  // LIST ALL TODOS
  list: (req, res) => {
    Todo.find({
      _creator: req.user._id
    }).then((todos) => {
      res.send({todos});
    }, (e) => {
      res.status(400).send(e);
    });
  },

  // GET TODOS BY ID
  byId: (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Todo.findOne({
      _id: id,
      _creator: req.user._id
    }).then((todo) => {
      if(!todo) {
        return res.status(404).send();
      }

      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
  },

  // DELETE TODOS BY ID
  delete: (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Todo.findOneAndRemove({
        _id: id,
        _creator: req.user._id
    }).then((todo) => {
      if(!todo) {
        return res.status(404).send();
      }

      res.status(200).send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
  },

  // UPDATE A TODO BY ID
  update: (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }

    Todo.findOneAndUpdate({
      _id: id,
      _creator: req.user._id
    },
    {$set: body}, {new: true}).then((todo) => {
      if(!todo) {
        return res.status(404).send();
      }

      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
  }

};  // end todoController

module.exports = todoController;
