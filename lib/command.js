var create = require('./create.js');
var update = require('./update.js');
var remove = require('./remove.js');
var get = require('./get.js');

module.exports = function command(scope) {
  console.log('command : '+JSON.stringify(scope));
  switch(scope.label) {
    case 'add':
      console.log('add');
      create(scope.contact,scope.time,scope.phone);
      break;

    case 'updateAnniversaire':
      update.updateAnniversaire(scope.contact,scope.time);
      break;

    case 'updateTelephone':
      update.updateTelephone(scope.contact,scope.phone);
      break;

    case 'remove':
      remove(scope.contact);
      break;

    case 'getAnniversaire':
      return get.getAnniversaire(scope.contact);
      break;

    case 'getTelephone':
      return get.getTelephone(scope.contact);
      break;

    default:

      break;
  }
};