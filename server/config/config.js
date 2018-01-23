var env = process.env.NODE_ENV || 'development';
//console.log('env ****', env);


if (env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];  // could be development or test

  Object.keys(envConfig).forEach((key) => { // [ 'PORT', 'MONGODB_URI' ]
    process.env[key] = envConfig[key];
  });
}

// // config.json
// {
//   "test": {
//     "PORT": 3000,
//     "MONGODB_URI": "mongodb://localhost:27017/TodoAppTest",
//     "JWT_SECRET": "dokokdow2223o9d939eo9k"
//   },
//   "development": {
//     "PORT": 3000,
//     "MONGODB_URI": "mongodb://localhost:27017/TodoApp",
//     "JWT_SECRET": "ssdlmdlddfffffefffdffd"
//   }
// }
