#!/usr/bin/env node

import userName from '../src/cli.js';
import * as get from './get.js';
import * as answer from './answer.js';
import ask from './ask.js';
import findCorrectAnswer from './findCorrectAnswer.js';

const brainEven = () => {
  const gameName = 'brainEven';

  answer.weclomeMessage(userName, gameName);

  for (let i = 0; i <= 2; i += 1) {
    const num = get.num();
    const correctAnswer = findCorrectAnswer[gameName](num);
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
