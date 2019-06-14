var create = require('./create.js');
var update = require('./update.js');
var remove = require('./remove.js');
var get = require('./get.js');

module.exports = function command(scope) {
  console.log('command : '+JSON.stringify(scope));
  switch(scope.label) {
    case 'add':
      console.log('add');
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