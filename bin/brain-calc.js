#!/usr/bin/env node

import { condition, getQuestionAndAnswer } from '../src/games/calc.js';
import startGame from '../src/index.js';

startGame(condition, getQuestionAndAnswer);
