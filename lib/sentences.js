module.exports = {


  sentenceAddFr :
      {
        "service": "contacts",
        "label": "add",
        "language": "fr",
        "sentences": [
          {
            "uuid": "661629ba-e59e-483a-adb3-a22bd151a609",
            "text": "Ajoute %CONTACT% né le %TIME% avec %PHONE% comme numéro"
          }
        ]
      },

    sentenceReadTelephoneFr :
        {
            "service": "contacts",
            "label": "getTelephone",
            "language": "fr",
            "sentences": [
                {
                    "uuid": "661629ba-e59e-483a-adb3-a22bd151a601",
                    "text": "Quel est le numéro de %CONTACT% ?"
                }
            ]
        },

    sentenceReadBirthdateFr :
        {
            "service": "contacts",
            "label": "getBirthdate",
            "language": "fr",
            "sentences": [
                {
                    "uuid": "661629ba-e59e-483a-adb3-a22bd151a606",
                    "text": "Quel est la date d'anniversaire de %CONTACT% ?"
                }
            ]
        },

    sentenceUpdateTelephoneFr :
        {
            "service": "contacts",
            "label": "updateNumber",
            "language": "fr",
            "sentences": [
                {
                    "uuid": "661629ba-e59e-483a-adb3-a22bd151a603",
                    "text": "Mets à jour le numéro de %CONTACT%"
                }
            ]
        },


    sentenceUpdateBirthdateFr :
        {
            "service": "contacts",
            "label": "updateBirthdate",
            "language": "fr",
            "sentences": [
                {
                    "uuid": "661629ba-e59e-483a-adb3-a22bd151a613",
                    "text": "Mets à jour la date d'anniversaire de %CONTACT%"
                }
            ]
        },

    sentenceRemoveFr :
        {
            "service": "contacts",
            "label": "remove",
            "language": "fr",
            "sentences": [
                {
                    "uuid": "661629ba-e59e-483a-adb3-a22bd151a604",
                    "text": "Supprime le contact %CONTACT%"
                }
            ]
        },

    answerContactFr: {
    "uuid": "ef5d7698-56b8-4fd3-b4f0-cc359e335d6b",
        "text": "%CONTACT_ANSWER%",
        "label": "get-contact",
        "service": "contacts",
        "language": "fr"
},


  sentenceAddEn :
      {
        "service": "contacts",
        "label": "add",
        "language": "en",
        "sentences": [
          {
            "uuid": "c1ba8fed-e64b-431a-be7e-b2306c1922ec",
            "text": "Add %CONTACT% born the %TIME% with %PHONE% as number"
          }
        ]
      },

    sentenceReadTelephoneEn :
        {
            "service": "contacts",
            "label": "getTelephone",
            "language": "en",
            "sentences": [
                {
                    "uuid": "c1ba8fed-e64b-431a-be7e-b2306c1922ed",
                    "text": "Get %CONTACT%'s number"
                }
            ]
        },


    sentenceReadBirthdateEn :
        {
            "service": "contacts",
            "label": "getBirthdate",
            "language": "en",
            "sentences": [
                {
                    "uuid": "c1ba8fed-e64b-431a-be7e-b2306c1952ed",
                    "text": "Get %CONTACT%'s birthdate"
                }
            ]
        },

    sentenceRemoveEn :
        {
            "service": "contacts",
            "label": "remove",
            "language": "en",
            "sentences": [
                {
                    "uuid": "c1ba8fed-e64b-431a-be7e-b2306c1922eg",
                    "text": "Remove %CONTACT% from contacts"
                }
            ]
        },


    sentenceUpdateBirthdateEn :
        {
            "service": "contacts",
            "label": "updateBirthdate",
            "language": "en",
            "sentences": [
                {
                    "uuid": "c1ba8fed-e64b-431a-be7e-b2306c1922eh",
                    "text": "Update %CONTACT%'s birthdate"
                }
            ]
        },

    sentenceUpdateTelephoneEn :
        {
            "service": "contacts",
            "label": "updateNumber",
            "language": "en",
            "sentences": [
                {
                    "uuid": "c1ba8fed-e64b-431a-be74-b2306c1922eh",
                    "text": "Update %CONTACT%'s number"
                }
            ]
        },

    answerContactEn: {
        "uuid": "ef5d7698-56b8-4fd3-b4f0-cc359e335d6b",
        "text": "%CONTACT_ANSWER%",
        "label": "get-contact",
        "service": "contacts",
        "language": "en"
    },

}