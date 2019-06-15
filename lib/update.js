var jsonDao = require('./dao/jsonDao.js');

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports ={

  updateAnniversaire:(name,anniversaire) => {

    // uncomment following line ;)
    console.log('get');

    return jsonDao.updateContacts(name, "anniversaire", anniversaire);

  },
  updateTelephone:(name,phone) =>{

    // uncomment following line ;)
    console.log('get');

    return jsonDao.updateContacts(name, "phone",phone);

  }
}