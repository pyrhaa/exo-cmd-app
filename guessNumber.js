const chalk = require('chalk');
const readlineSync = require('readline-sync');

const guessnb = () => {
  const random = Math.floor(Math.random() * 10) + 1; //je stock nb secret btw 1 et 10
  let answer = 0; //reponse user initialise sur 0

  while (answer !== random) {
    let number = readlineSync.question('Devinez un chiffre entre 1 et 10: '); //tant que different de random boucle la question
    answer = Number(number);

    console.log(number);

    if (answer > random) {
      console.log(chalk.red('Nombre trop grand'));
    }
    if (answer < random) {
      console.log('Nombre trop petit');
    }
    if (answer === random) {
      console.log('Bravo!');
      break; //sort de boucle quand bonne answer
    }
  }
};

guessnb();
