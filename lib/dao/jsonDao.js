var fs = require("fs");

module.exports = {
    // Get the client
    readContacts: () => {
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
    },

    // maybe you want to reset client's instance
    writeContacts: (data) => {
        return new Promise(function (resolve, reject) {
            fs.writeFile("./../../contacts.json", JSON.stringify(data), 'utf8',(err) => {
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