var jsonDao = require('./dao/jsonDao.js');
var queries = require('./queries.js');

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports = (name,birthdate,phone) => {

    // uncomment following line ;)
    console.log('create');
    var data={
        "name":name,
        "birthdate":birthdate.text,
        "phone":phone
    }
    const contactPromise = jsonDao.writeContacts(data);
    // Getting user ... also a promise
    const userPromise = gladys.utils.sqlUnique(queries.getUserById, [1])



    // Wait coords and user promises to be resolved to access the data and create the alarm
    // We return this cause gladys.alarm.create returns ofc ... a Promise ;)
    return Promise.all([userPromise,contactPromise]).then(
        // Create alarm for the next ISS visit ;)
        resolvedPromises => {

            console.log('creating alarm...')

            var date=new Date(data.birthdate);
            date.setFullYear(new Date().getFullYear());
            if(new Date()<date){
                date.setFullYear(date.getFullYear()+1)
            }

            gladys.alarm.create({
                name: "Anniversaire de "+data.name,
                // Get time of the next visit
                datetime: date,
                // Get user object
                user: resolvedPromises[0]

            })
        }
    )


}