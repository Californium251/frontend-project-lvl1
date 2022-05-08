#!/usr/bin/env node

import userName from '../src/cli.js';
import * as get from '../bin/get.js';
import * as answer from '../bin/answer.js';
import ask from '../bin/ask.js';
import findCorrectAnswer from '../bin/findCorrectAnswer.js';

const brainCalc = () => {
  const gameName = 'brainCalc';

  answer.weclomeMessage(userName, gameName);

  for (let i = 0; i <= 2; i += 1) {
    const operation = get.operation();
    const firstNum = get.num();
    const secondNum = get.num();
    const userAnswer = ask(`${firstNum} ${operation} ${secondNum}`);
    const correctAnswer = findCorrectAnswer[gameName](firstNum, secondNum, operation);

    if (+userAnswer !== correctAnswer) {
      answer.gameOver(userAnswer, correctAnswer, userName);
      return;
    }
    answer.correctAnswer();
  }
  answer.congratulations(userName);
};

brainCalc();
