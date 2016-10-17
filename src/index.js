var chalk = require('chalk')
function hello(text) {
  console.log('hello ' + text);
}
hello(chalk.red.bgBlue.bold('world'));
