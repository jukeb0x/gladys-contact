var getDirName= require('path').dirname(require.main.filename);

module.exports = {
    jsonfile: getDirName+"/api/hooks/contacts/contacts.json"
};