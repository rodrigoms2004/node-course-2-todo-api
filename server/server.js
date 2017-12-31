var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var dateToday = new Date()
var dateNumber = Math.round((dateToday.getTime() / 1000)); // to unix timestamp

var app = express();

app.use(bodyParser.json()); // middleware

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

































// var newUser = new User({
//   email: 'rodrigoms2004@gmail.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save it', e);
// });
//
// var dateToday = new Date()
// var dateNumber = Math.round((dateToday.getTime() / 1000)); // to unix timestamp
// var dateFormat = new Date(dateNumber * 1000);

// var otherTodo = new Todo({
//   text: true
//   // text: 'Feed the cat',
//   // completed: true,
//   // completedAt: dateNumber
// });

// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save it', e);
// });