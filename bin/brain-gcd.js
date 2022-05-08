#!/usr/bin/env node

import userName from '../src/cli.js';
import * as answer from './answer.js';
import * as get from './get.js';
import findCorrectAnswer from './findCorrectAnswer.js';
import ask from './ask.js';

const brainGcd = () => {
  const gameName = 'brainGcd';
  answer.weclomeMessage(userName, gameName);
  for (let i = 0; i <= 2; i += 1) {
    const firstNum = get.num();
    const secondNum = get.num();
    const correctAnswer = findCorrectAnswer[gameName](firstNum, secondNum);

    const userAnswer = ask(`${firstNum} ${secondNum}`);

    if (+userAnswer !== correctAnswer) {
      answer.gameOver(userAnswer, correctAnswer, userName);
      return;
    }
    answer.correctAnswer();
  }
  answer.congratulations(userName);
};

brainGcd();
