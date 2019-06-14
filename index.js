// This the entry point of the module.
// You could declare all your function there, but by convention and for good practices
// you should only store functions in the './lib' folder and expose them here

var create = require('./lib/create.js');
var update = require('./lib/update.js');
var remove = require('./lib/remove.js');
var get = require('./lib/get.js');
var command = require('./lib/contacts.command.js');
var install = require('./install.js');
var uninstall = require('./uninstall.js');

module.exports = function(sails) {

  return {
    create: create,
    update: update,
    remove: remove,
    update: update,
    get: get,
    install: install,
    uninstall: uninstall
  };
};
