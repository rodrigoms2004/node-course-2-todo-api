'use strict'

var {Todo} = require('./../models/todo');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

let todoController = {

  // CREATE A TODO
  create: async (req, res) => {
    const todo = new Todo({
      text: req.body.text,
      completed: req.body.completed,
      completedAt: req.body.completedAt,
      _creator: req.user._id
    });

    try {
      const doc = await todo.save();
      res.send(doc)
    } catch (e) {
      res.status(400).send(e);
    }
  },

  // LIST ALL TODOS
  list: async (req, res) => {
    try {
      const todos = await Todo.find({
        _creator: req.user._id
      });
      res.send({todos});
    } catch (e) {
      res.status(400).send(e);
    }
  },

  // GET TODOS BY ID
  byId: async (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    try {
      const todo = await Todo.findOne({
        _id: id,
        _creator: req.user._id
      });
      if(!todo) {
        return res.status(404).send();
      }

      res.send({todo});
    } catch (e) {
      res.status(400).send();
    }
  },

  // DELETE TODOS BY ID
  delete: async (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    try {
      const todo = await Todo.findOneAndRemove({
          _id: id,
          _creator: req.user._id
      });
      if(!todo) {
        return res.status(404).send();
      }

      res.status(200).send({todo});
    } catch (e) {
      res.status(400).send();
    }
  },

  // UPDATE A TODO BY ID
  update: async (req, res) => {
    const id = req.params.id;
    const body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }

    try {
      const todo = await Todo.findOneAndUpdate({
        _id: id,
        _creator: req.user._id
      },
      {$set: body}, {new: true});
      if(!todo) {
        return res.status(404).send();
      }

      res.send({todo});
    } catch (e) {
      res.status(400).send();
    }
  }
};  // end todoController

module.exports = todoController;
