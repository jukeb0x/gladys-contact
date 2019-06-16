var jsonDao = require('./dao/jsonDao.js');
var queries = require('./queries.js');

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports ={

    updateAnniversaire:(name,anniversaire) => {


        const contactPromise = jsonDao.updateContact(name, "birthdate", anniversaire.text);
        // Getting user ... also a promise
        const userPromise = gladys.utils.sqlUnique(queries.getUserById, [1])



        // Wait coords and user promises to be resolved to access the data and create the alarm
        // We return this cause gladys.alarm.create returns ofc ... a Promise ;)
        return Promise.all([userPromise,contactPromise]).then(
            // Create alarm for the next ISS visit ;)
            resolvedPromises => {



                var date=new Date(anniversaire);
                date.setFullYear(new Date().getFullYear());
                date.setHours(12);
                if(new Date()>date){
                    date.setFullYear(date.getFullYear()+1)
                }

                gladys.alarm.create({
                    name: "Anniversaire de "+name,
                    // Get time of the next visit
                    datetime: date,
                    // Get user object
                    user: resolvedPromises[0]

                })
            }
        )


    },
    updateTelephone:(name,phone) =>{

        return new Promise(function (resolve, reject) {
            jsonDao.updateContact(name, "phone",phone).then(() => {
                resolve();});
        });
    }
}