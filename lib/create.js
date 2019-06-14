var jsonDao = require('./dao/jsonDao.js');

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports = () => {

    // uncomment following line ;)
    console.log('create');
    var data={
        "name":"mathilde",
        "surname":"le roch",
        "birthdate":"10/11",
        "phone":"10/11/12"
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

            gladys.alarm.create({
                name: "annif",
                // Get time of the next visit
                datetime: new Date(data.birthdate),
                // Get user object
                user: resolvedPromises[0]

            })
        }
    )


}