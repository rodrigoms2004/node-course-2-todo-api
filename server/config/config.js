var env = process.env.NODE_ENV || 'development';
//console.log('env ****', env);


if (env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];  // could be development or test

  Object.keys(envConfig).forEach((key) => { // [ 'PORT', 'MONGODB_URI' ]
    process.env[key] = envConfig[key];
  });
}


// heroku config
// heroku config:set NAME=Rodrigo
// config:get NAME
// heroku config:unset NAME


// heroku config:set JWT_SECRET=adsfpoij234jdspoijsdf
// heroku config

// // config.json
// {
//   "test": {
//     "PORT": 3000,
//     "MONGODB_URI": "mongodb://172.16.105.134:27017/TodoAppTest",
//     "JWT_SECRET": "dokokdow2223o9d939eo9k"
//   },
//   "development": {
//     "PORT": 3000,
//     "MONGODB_URI": "mongodb://172.16.105.134:27017/TodoApp",
//     "JWT_SECRET": "ssdlmdlddfffffefffdffd"
//   }
// }

// if (env === 'development') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://172.16.105.134:27017/TodoApp'
// } else if (env == 'test') {
//   process.env.PORT = 3000
//   process.env.MONGODB_URI = 'mongodb://172.16.105.134:27017/TodoAppTest'
// }
