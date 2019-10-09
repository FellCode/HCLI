const spawn = require('child_process').spawn;
const chalk = require('chalk');

const mapActionToCommand = (action) => {
    switch(action){
        case "Start":
            return "up";
        case "Stop":
            return "halt";
        case "Claims":
            return["provision","--provision-with","healthclaims"];
        case "VGV":
                return["provision","--provision-with","vgv"];
        case "LEDB":
                return["provision","--provision-with","leistungserbringer"];
        case "Deploy":
                return["provision","--provision-with","deploy"];
        case "Liquibase":
                return["provision","--provision-with","liquibase"];       
    }       
}


module.exports = {
    startProcess: (chosenAction) => {
        
        ls = spawn('vagrant.exe',[mapActionToCommand(chosenAction)]);


        ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data.toString());
        });

        ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data.toString());
        });
    },

    startProvisioning: (chosenAction) => {

        ls = spawn('vagrant.exe',[...mapActionToCommand(chosenAction)]);


        ls.stdout.on('data', function (data) {
        console.log(chalk.green('stdout: ' + data.toString()));
        });

        ls.stderr.on('data', function (data) {
        console.log(chalk.red('stderr: ' + data.toString()));
        });
    }

}