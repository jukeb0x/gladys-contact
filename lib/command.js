var create = require('./create.js');
var update = require('./update.js');
var remove = require('./remove.js');
var get = require('./get.js');

module.exports = function command(scope) {
  console.log("Contacts module command"+JSOn.stringify(scope));
  switch(scope.label) {
    case 'add':

      return new Promise(function (resolve, reject) {
        if(scope.contacts.length== scope.times.length==scope.phones.length ){
          for(i=0;i<scope.contacts.length;i++){
            create(scope.contacts[i],scope.times[i],scope.phones[i]).then(() => {resolve()}).catch((e) => {
              console.error('Contacts module:', e);
              return reject(e);
            });

          }
        }
      });
      break;

    case 'updateBirthdate':
      return new Promise(function (resolve, reject) {
        if(scope.contacts.length==scope.times.length){
          for(i=0;i<scope.contacts.length;i++){
            update.updateAnniversaire(scope.contacts[i],scope.times[i]).then(() => {resolve()}).catch((e) => {
              console.error('Contacts module:', e);
              return reject(e);
            });

          }
        }
      });
      break;

    case 'updateNumber':

      return new Promise(function (resolve, reject) {
        if(scope.contacts.length==scope.phones.length){
          for(i=0;i<scope.contacts.length;i++){
            update.updateTelephone(scope.contacts[i],scope.phones[i]).then(() => {resolve()}).catch((e) => {
              console.error('Contacts module:', e);
              return reject(e);
            });

          }
        }
      });
      break;

    case 'remove':

      return new Promise(function (resolve, reject) {
        for(i=0;i<scope.contacts.length;i++){
          remove(scope.contacts[i]).then(() => {resolve()}).catch((e) => {
            console.error('Contacts module:', e);
            return reject(e);
          });


      }
  });
      break;

    case 'getBirthdate':

      return new Promise(function (resolve, reject) {
        var message="";
        for(i=0;i<scope.contacts.length;i++){

          get.getAnniversaire(scope.contacts[i]).then((result) => {
            message+="Sa date d'anniversaire est le "+result;
            var response = {
              label: 'get-contact',
              scope: {'%CONTACT_ANSWER%': message
              }
            };
            resolve(response);
          }).catch((e) => {
        console.error('Contacts module:', e);
        return reject(e);
      });



        }
      });



      break;

    case 'getTelephone':

      return new Promise(function (resolve, reject) {
        var message="";
        for(i=0;i<scope.contacts.length;i++){


          get.getTelephone(scope.contacts[i]).then((result) => {
            message+="Son numéro de téléphone est le "+result;
            var response = {
              label: 'get-contact',
              scope: {'%CONTACT_ANSWER%': message
              }
            };
            resolve(response);
          }).catch((e) => {
            console.error('Contacts module:', e);
            return reject(e);
          });



        }
      });


      break;


    case 'getContacts':
      return new Promise(function (resolve, reject) {
        get.getContacts().then((contacts) => {

          resolve(contacts);

        }).catch((e) => {
          console.error('Contacts module:', e);
          return reject(e);
        });




});
      break;

    default:

      break;
  }
};