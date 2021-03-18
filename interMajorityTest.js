const chalk = require('chalk');
const readlineSync = require('readline-sync');

const majority = 
const userName = readlineSync.question('Puis-je avoir votre nom de famille? ');

const userPren = readlineSync.question(
  'Puis-je avoir votre prenom de famille? '
);

const ageStr = readlineSync.question('Puis-je avoir votre age? ');

const age = Number(ageStr);

if (age >= 18) {
  console.log(
    chalk.green(`${userName} ${userPren}, vous êtes majeur, vous pouvez voter`)
  );
} else {
  console.log(
    chalk.red(
      `Désolé, ${userName} ${userPren}, vous êtes mineur, vous ne pouvez pas voter`
    )
  );
}
