var jsonDao = require('./dao/jsonDao.js');

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports ={

    getAnniversaire:(name) => {

        // uncomment following line ;)
        console.log('get');

        return jsonDao.readContacts(name).birthdate;

    },
    getTelephone:(name) =>{

        // uncomment following line ;)
        console.log('get');

        return jsonDao.readContacts(name).phone;

    },

    getContacts:() =>{

        // uncomment following line ;)
        console.log('get');

        return jsonDao.readAllContacts();

    }
}