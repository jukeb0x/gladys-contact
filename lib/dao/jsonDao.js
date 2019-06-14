var fs = require("fs");
var shared = require("./../shared.js");

module.exports = {
    // Get the client
    readContacts: () => {
        return new Promise(function (resolve, reject) {
            fs.readFile(shared.jsonfile, "utf-8", (err, data) => {
                if (err) {console.log(err);
                    // if something fails
                    reject(err);
                }
                resolve(data);
                console.log("Successfully read to File."+JSON.stringify(data));
            });




        })
    },

    // maybe you want to reset client's instance
    writeContacts: (dataToAppend) => {
        return new Promise(function (resolve, reject) {
            fs.readFile(shared.jsonfile, function (err, data) {

                if (err) {
                    console.log(err);
                    // if something fails
                    reject(error);
                } else {


                    var json = JSON.parse(data);
                    json.push(dataToAppend);
                    fs.writeFile(shared.jsonfile, JSON.stringify(json), 'utf8', function (err) {
                        if (err) {
                            console.log(err);
                            // if something fails
                            reject(error);
                        } else {
                            resolve(data);
                            console.log("Successfully Written to File.");
                        }
                    });
                }
        })

        })
    },



    // maybe you want to reset client's instance
    deleteContacts: () => {
        return new Promise(function (resolve, reject) {
            fs.readFile(shared.jsonfile, function (err, data) {

                if (err) {
                    console.log(err);
                    // if something fails
                    reject(error);
                } else {


                    var json = JSON.parse(data);
                    delete json[json.length-1];
                    fs.writeFile(shared.jsonfile, JSON.stringify(json), 'utf8', function (err) {
                        if (err) {
                            console.log(err);
                            // if something fails
                            reject(error);
                        } else {
                            resolve(data);
                            console.log("Successfully Written to File.");
                        }
                    });
                }
            })

        })
    },


    // maybe you want to reset client's instance
    updateContacts: () => {
        return new Promise(function (resolve, reject) {
            fs.readFile(shared.jsonfile, function (err, data) {

                if (err) {
                    console.log(err);
                    // if something fails
                    reject(error);
                } else {


                    var json = JSON.parse(data);
                    json[json.length-1].surname="updatedSurname";
                    fs.writeFile(shared.jsonfile, JSON.stringify(json), 'utf8', function (err) {
                        if (err) {
                            console.log(err);
                            // if something fails
                            reject(error);
                        } else {
                            resolve(data);
                            console.log("Successfully Written to File.");
                        }
                    });
                }
            })

        })
    }
}