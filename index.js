#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');
const processUtil = require ('./lib/process');

const spawn = require('child_process').spawn;


clear();
console.log(
    chalk.blue(
        figlet.textSync('HCLI',{horizontalLayout:'full'})
    )
);


if (!files.fileExists('Vagrantfile')) {
    console.log(chalk.bold.red('Kein Vagrantfile vorhanden!'));
    process.exit();
  }

  const run = async () => {
    const action = await inquirer.askForAction();

    if(action.Aktion === "Beenden"){
        console.log(
            chalk.blue(
                figlet.textSync('Goodbye!',{horizontalLayout:'fitted'})
            )
        );
        process.exit();
    }

    if(action.Aktion === "Provisionieren"){
        const provisioning = await inquirer.askForProvisioning();
        processUtil.startProvisioning(provisioning.Aktion);
    }

    if(action.Aktion ==="Start"){
        //Starte VM
        processUtil.startProcess(action.Aktion);
    }


    if(action.Aktion === "Stop"){
        //Stoppe VM
        processUtil.startProcess(action.Aktion);
    }

  }
  run();