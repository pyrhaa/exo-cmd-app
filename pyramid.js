// const chalk = require('chalk');
// const readlineSync = require('readline-sync');
const chalk = require('chalk');
const readlineSync = require('readline-sync');

const showStars = (nbBase, reverse, str) => {
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      console.log(str.repeat(i));
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log(str.repeat(i));
    }
  }
};

let nbBase = readlineSync.question('Nb base ? ');
nbBase = Number(nbBase);
let motif = readlineSync.question('motif ? ');
showStars(nbBase, false, motif);
