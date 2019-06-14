var create = require('./create.js');
var update = require('./update.js');
var remove = require('./remove.js');
var get = require('./get.js');

module.exports = function command(scope) {

  switch(scope.label) {
    case 'create':
      create();
      break;

    case 'update':
      update();
      break;

    case 'remove':
      remove();
      break;

    case 'get':
      get();
      break;

    default:

      break;
  }
};