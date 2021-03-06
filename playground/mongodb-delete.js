//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// http://mongodb.github.io/node-mongodb-native/2.2/api

MongoClient.connect('mongodb://172.16.105.134:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany
  db.collection('Users').deleteMany({name: 'Rodrigo Silveira'}).then((result) => {
    console.log(result);
  });

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a43e25b0db3ac10d71141ea')
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });


  db.close();
});
