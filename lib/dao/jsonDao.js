var fs = require("fs");




module.exports = function readContacts() {

    return new Promise(function (resolve, reject) {
        fs.readFile("./../../contacts.json", "utf-8", (err, data) => {
            if (err) {console.log(err);
                // if something fails
                reject(error);
            }
            resolve(data);
            console.log("Successfully Written to File.");
        });




    })


};

module.exports = function writeContacts(data) {
    return new Promise(function (resolve, reject) {
        fs.writeFile("temp.txt", data, (err) => {
            if (err) {console.log(err);
                // if something fails
                reject(error);
            }
            resolve(data);
            console.log("Successfully Written to File.");
        });




    })

};