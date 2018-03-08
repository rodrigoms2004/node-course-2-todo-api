// example from 
// https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback

const crypto = require('crypto');

// its encrypt password 'secret' adding a 'salt' to it, iterates 100 thousand times
// creating a key of 64 characteres of lenght with hashing algorithm sha-512.
crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
  console.log('############################')
});


// its encrypt password 'secret' adding a 'salt' to it, iterates 100 thousand times
// creating a key of 512 characteres of lenght with hashing algorithm sha-512.
crypto.DEFAULT_ENCODING = 'hex';
crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey);  // '3745e48...aa39b34'
  console.log('############################')
});