const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a4be044a5a0771e416c4da911';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// mongoose converts to ObjectID
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


var id =  '5a4693d0d91098544cc598a0';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2)); // 2 empty spaces
}, (e) => {
  console.log(e);
});
