#!/usr/bin/env node

import userName from '../src/cli.js';
import * as answer from '../bin/answer.js';
import * as get from '../bin/get.js';
import findCorrectAnswer from '../bin/findCorrectAnswer.js';
import ask from '../bin/ask.js';

const brainProgression = () => {
  const gameName = 'brainProgression';
  answer.weclomeMessage(userName, gameName);
  for (let i = 0; i <= 2; i += 1) {
    const prog = get.progression(get.num());
    const userAnswer = ask(prog.subsequence.join(' '));

    if (+userAnswer !== findCorrectAnswer[gameName](prog)) {
      answer.gameOver(userAnswer, prog.missedEl, userName);
      return;
    }
    answer.correctAnswer();
  }
  answer.congratulations(userName);
};

brainProgression();
