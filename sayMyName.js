const chalk = require('chalk');
const readlineSync = require('readline-sync');

let Myname = readlineSync.question('Qui suis-je ? : ');
console.log('My name is ' + chalk.blue(Myname));

//Exemple vu dans le cours qui peut servir aussi .....Sarah.B
// if (process.argv.length != 3) {
//   console.log(`usage: node sayMyName.js name`);
//   process.exit(1);
// }
// let name = process.argv[2];
// console.log(chalk.blue(`My name is ${name}`));
