var create = require('./create.js');
var update = require('./update.js');
var remove = require('./remove.js');
var get = require('./get.js');

module.exports = function command(scope) {
  console.log('command : '+JSON.stringify(scope));
  switch(scope.label) {
    case 'add':
      console.log('add');
      if(scope.contacts.length== scope.times.length==scope.phones.length ){
        for(i=0;i<scope.contacts.length;i++){
          create(scope.contacts[i],scope.times[i],scope.phones[i]);
        }
      }

      break;

    case 'updateBirthdate':
      if(scope.contacts.length==scope.times.length){
        for(i=0;i<scope.contacts.length;i++){
          update.updateAnniversaire(scope.contacts[i],scope.times[i])
        }

      }
      break;

    case 'updateTelephone':
      if(scope.contacts.length==scope.phones.length){
        for(i=0;i<scope.contacts.length;i++){
          update.updateTelephone(scope.contacts[i],scope.phones[i])
        }

      }
      break;

    case 'remove':
      for (contact in scope.contacts) {
        remove(contact);
      }
      break;

    case 'getBirthdate':
      var response="";
      for (contact in scope.contacts) {
        response+=get.getAnniversaire(contact);
      }
      break;

    case 'getTelephone':
      var response="";
      for (contact in scope.contacts) {
        response+=get.getTelephone(contact);
      }
      break;

    default:

      break;
  }
};