const Promise = require('bluebird');
var sentences = require('./lib/sentences.js');

module.exports = function uninstall(){

  //gladys.user.get().then(function(user){
  //	if(user[0].language!='fr-FR')
  //On pourrait réutiliser le user mais ne serait pas cohérent avec l'install

  return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
    if(lang[0].language!='fr-FR')
      gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceAddEn.sentences[0].uuid,sentences.sentenceReadEn.sentences[0].uuid,sentences.sentenceRemoveEn.sentences[0].uuid,sentences.sentenceUpdateEn.sentences[0].uuid]);
    else gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceAddFr.sentences[0].uuid,sentences.sentenceReadFr.sentences[0].uuid,sentences.sentenceRemoveFr.sentences[0].uuid,sentences.sentenceUpdateFr.sentences[0].uuid]);
  });

};