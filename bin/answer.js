import constants from './constants.js';

export const weclomeMessage = (name, gameName) => {
  console.log(`Hello, ${name}!`);
  console.log(constants[gameName]);
};

export const correctAnswer = () => {
  console.log('Correct!');
};

export const gameOver = (actual, correct, name) => {
  console.log(`'${actual}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};
