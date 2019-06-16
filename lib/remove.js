var jsonDao = require('./dao/jsonDao.js');

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports = (name) => {

  return new Promise(function (resolve, reject) {
    jsonDao.deleteContacts(name).then(() => {
      resolve();});
  });


}