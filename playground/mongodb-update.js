//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// http://mongodb.github.io/node-mongodb-native/2.2/api

MongoClient.connect('mongodb://172.16.105.134:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a43f68e43ece478585162fc')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log();
  // });

  // findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a43e0d9631d7d09a2c21edb')
  }, {
    $set: {
      name: 'Rodrigo'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });




  db.close();
});
