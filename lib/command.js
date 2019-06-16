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
      var message="";
      for (contact in scope.contacts) {
        message+="le Contact "+contact+" a la date d'anniversare "+get.getAnniversaire(contact);
      }
      var response = {
        label: 'get-contact',
        scope: {'%CONTACT_ANSWER%': message
        }
      };
      return response;
      break;

    case 'getTelephone':
      var message="";
      for (contact in scope.contacts) {
        message+="le Contact "+contact+" a le numéro de téléphone "+get.getTelephone(contact);
      }

      var response = {
        label: 'get-contact',
        scope: {'%CONTACT_ANSWER%': message
        }
      };
      console.log("get telephone response"+JSON.stringify(response));
      return response;
      break;


    case 'getContacts':
      var contacts=get.getContacts();

      return contacts;

      break;

    default:

      break;
  }
};