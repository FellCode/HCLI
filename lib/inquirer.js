const inquirer = require('inquirer');
const files = require('./files');

module.exports = {

    askForAction: ()  => {
        const questions = [
            {
              type: 'list',
              name: 'Aktion',
              message: 'Aktionen:',
              choices: ['Start','Stop','Provisionieren'],
            }
          ];
          return inquirer.prompt(questions);
    }



}