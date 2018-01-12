// https://elements.heroku.com/addons/mongolab
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};


// https://enigmatic-dawn-35678.herokuapp.com/ | https://git.heroku.com/enigmatic-dawn-35678.git
// heroku addons:create mongolab:sandbox
// heroku config
//▸    heroku-cli: update available from 6.14.39-addc925 to 6.15.13-3dce47c
//=== enigmatic-dawn-35678 Config Vars
//MONGODB_URI: mongodb://heroku_jkzfnvkr:prq3hcktlimkj928s0d5fnme13@ds151207.mlab.com:51207/heroku_jkzfnvkr
