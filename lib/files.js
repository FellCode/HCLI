const fs = require('fs');
const path = require('path')


module.exports = {
    fileExists : (filePath) => {
        try {
            return fs.statSync(filePath).isFile();
        } catch(err) {
            return false;
        }
    }
}