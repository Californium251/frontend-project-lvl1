#!/usr/bin/env node

import readlineSync from 'readline-sync';

const newNum = () => Math.round(Math.random() * 100);

const gameOver = (actual, correct, name) => {
  console.log(`'${actual}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
};

function findCorrectAnswer(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

const getName = () => readlineSync.question('May I have your name? ');

const ask = () => {
  const name = getName();
  console.log(`Hello, ${name}!`);

  for (let i = 0; i <= 2; i += 1) {
    const num = newNum();
    const correctAnswer = findCorrectAnswer(num);
    const answer = readlineSync.question(`Question: ${num} `);
    if (answer !== correctAnswer) {
      gameOver(answer, correctAnswer, name);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

console.log(ask());
