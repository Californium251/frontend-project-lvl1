#!/usr/bin/env node

import { condition, getQuestion, findCorrectAnswer } from '../src/games/gcd.js';
import startGame from '../src/index.js';

startGame(condition, getQuestion, findCorrectAnswer);
