import readlineSync from 'readline-sync';
import cli from './cli.js';

const showCorrectMessage = () => {
  console.log('Correct!');
};

const showGameOver = (actual, correct, name) => {
  console.log(`'${actual}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
};

const showCongratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const ask = (num) => readlineSync.question(`Question: ${num} `);

const startGame = (condition, getQuestion, findCorrectAnswer) => {
  const userName = cli(condition);
  for (let i = 0; i <= 2; i += 1) {
    const question = getQuestion();
    const userAnswer = ask(question.str);
    const correctAnswer = findCorrectAnswer(question.nums);
    if (userAnswer !== correctAnswer) {
      showGameOver(userAnswer, correctAnswer, userName);
      return;
    }
    showCorrectMessage();
  }
  showCongratulations(userName);
};

export default startGame;
