#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');

const spawn = require('child_process').spawn;


clear();
console.log(
    chalk.blue(
        figlet.textSync('HCLI',{horizontalLayout:'full'})
    )
);


if (!files.fileExists('Vagrantfile')) {
    console.log(chalk.red('Kein Vagrantfile vorhanden!'));
    process.exit();
  }

  const run = async () => {
    const action = await inquirer.askForAction();

    if(action.Aktion ==="Start"){
        //Starte VM
        ls    = spawn('vagrant.exe',["up"]);

ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data.toString());
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data.toString());
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});
            
    }


    if(action.Aktion === "Stop"){
        //Stoppe VM
        console.log("Stop");
    }
    if(action.Aktion === "provisionieren"){
        console.log("Prov");
    }
  }
  run();