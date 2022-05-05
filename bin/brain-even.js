#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import newNum from './new-num.js';
import * as show from './return-answer.js';

const ask = () => {
  function findCorrectAnswer(num) {
    return num % 2 === 0 ? 'yes' : 'no';
  }

  show.weclomeMessage(userName);

  for (let i = 0; i <= 2; i += 1) {
    const num = newNum();
    const correctAnswer = findCorrectAnswer(num);
    const answer = readlineSync.question(`Question: ${num} `);
    if (answer !== correctAnswer) {
      show.gameOver(answer, correctAnswer, userName);
      return;
    }
    show.correctAnswer();
  }
  show.congratulations(userName);
};

ask();