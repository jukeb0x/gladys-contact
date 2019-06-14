var jsonDao = require('./dao/jsonDao.js');

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports = () => {

  // uncomment following line ;)
  console.log('get');

  return jsonDao.deleteContacts();

}