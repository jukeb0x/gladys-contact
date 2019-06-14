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
    writeContacts: (data) => {
        return new Promise(function (resolve, reject) {
            fs.appendFile(shared.jsonfile, JSON.stringify(data), 'utf8',(err) => {
                if (err) {
                    console.log(err);
                    // if something fails
                    reject(error);
                } else{
                    resolve(data);
                console.log("Successfully Written to File.");
            }
            });




        })
    }
}