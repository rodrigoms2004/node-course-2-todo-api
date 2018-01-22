'use strict'

// CRUD = Create, Read, Update, Delete
// Create = POST method
// READ   = GET method
// UPDATE = PUT method
// DELETE = DELETE method


const router = require('express').Router();
const todoController = require('../controllers/todoController');
const userController = require('../controllers/userController');
var {authenticate} = require('./../middleware/authenticate');

// API RESTFUL FOR TODOS
router.post('/todos', authenticate, todoController.create);
router.get('/todos', authenticate, todoController.list);
router.get('/todos/:id', authenticate, todoController.byId);
router.delete('/todos/:id', authenticate, todoController.delete);
router.put('/todos/:id', authenticate, todoController.update);

// API RESTFUL FOR USERS
router.post('/users', userController.create);
router.get('/users/me', authenticate, userController.validate);
router.post('/users/login', userController.login);
router.delete('/users/me/token', authenticate, userController.logoff)



module.exports = router;
