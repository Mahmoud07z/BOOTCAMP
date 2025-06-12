const chalk = require('chalk');

function displayColorfulMessage() {
    console.log(chalk.blue.bgYellow.bold('This is a good message!'));
    console.log(chalk.green('Node.js is fun!'));
    console.log(chalk.red.bold('Enjoy coding!'));
}

module.exports = displayColorfulMessage;