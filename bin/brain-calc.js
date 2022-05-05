#!/usr/bin/env node

import userName from '../src/cli.js';
import * as get from './get.js';
import * as answer from './answer.js';
import ask from './ask.js';

const brainCalc = () => {
  function findCorrectAnswer(n1, n2, op) {
    if (op === '+') {
      return n1 + n2;
    }
    if (op === '-') {
      return n1 - n2;
    }
    if (op === '*') {
      return n1 * n2;
    }
    return NaN;
  }

  answer.weclomeMessage(userName);

  for (let i = 0; i <= 2; i += 1) {
    const operation = get.operation();
    const firstNum = get.num();
    const secondNum = get.num();
    const userAnswer = ask(`${firstNum} ${operation} ${secondNum}`);
    const correctAnswer = findCorrectAnswer(firstNum, secondNum, operation);
    if (+userAnswer !== correctAnswer) {
      answer.gameOver(userAnswer, correctAnswer, userName);
      return;
    }
    answer.correctAnswer();
  }
  answer.congratulations(userName);
};

brainCalc();
