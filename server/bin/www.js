'use strict'

const debug = require('debug')('nodejs:bin:www')
const app = require('../server');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
  debug('Server running');
});
