#!/usr/bin/env node

import getUserName from '../src/cli.js';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${getUserName}!`);
};

brainGames();
