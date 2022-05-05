#!/usr/bin/env node

import userName from '../src/cli.js';
import * as get from './get.js';
import * as answer from './answer.js';
import ask from './ask.js';

const brainEven = () => {
  function findCorrectAnswer(num) {
    return num % 2 === 0 ? 'yes' : 'no';
  }

  answer.weclomeMessage(userName);

  for (let i = 0; i <= 2; i += 1) {
    const num = get.num();
    const correctAnswer = findCorrectAnswer(num);
    const userAnswer = ask(num);
    if (userAnswer !== correctAnswer) {
      answer.gameOver(userAnswer, correctAnswer, userName);
      return;
    }
    answer.correctAnswer();
  }
  answer.congratulations(userName);
};

brainEven();
