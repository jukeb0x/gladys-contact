var jsonDao = require('./dao/jsonDao.js');

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports ={

    getAnniversaire:(name) => {




        return new Promise(function (resolve, reject) {
            jsonDao.readContact(name).then((result) => {
                resolve(result.birthdate);});

        })



    },
    getTelephone:(name) =>{


        return new Promise(function (resolve, reject) {
            jsonDao.readContact(name).then((result) => {
                resolve(result.phone);});

        })

    },

    getContacts:() =>{
        return new Promise(function (resolve, reject) {
            jsonDao.readAllContacts(name).then((result) => {

                resolve(result);});

        })



    }
}