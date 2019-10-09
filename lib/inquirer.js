const inquirer = require('inquirer');

module.exports = {

    askForAction: ()  => {
        const questions = [
            {
              type: 'list',
              name: 'Aktion',
              message: 'Welche Aufgabe soll ich für dich übernehmen:',
              choices: ['Start','Stop','Provisionieren','Beenden'],
            }
          ];
          return inquirer.prompt(questions);
    },
    askForProvisioning: () => {
    const questions = [
        {
          type: 'list',
          name: 'Aktion',
          message: 'Was möchtest du Provisionieren:',
          choices: ['Claims','VGV','LEDB','Partner','Liquibase','Deploy'],
        }
      ];
      return inquirer.prompt(questions);

    }
}