var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.16.105.134:27017/TodoApp');

module.exports = {mongoose};
