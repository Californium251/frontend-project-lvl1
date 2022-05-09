import userName from '../cli.js';
import * as logic from '../index.js';

const brainCalc = () => {
  const gameName = 'brainCalc';
  logic.say.welcomeMessage(userName, gameName);

  for (let i = 0; i <= 2; i += 1) {
    const operation = logic.generate.operation();
    const firstNum = logic.generate.num();
    const secondNum = logic.generate.num();
    const userAnswer = logic.say.ask(`${firstNum} ${operation} ${secondNum}`);
    const correctAnswer = logic.findCorrectAnswer[gameName](firstNum, secondNum, operation);
    if (+userAnswer !== correctAnswer) {
      logic.say.gameOver(userAnswer, correctAnswer, userName);
      return;
    }
    logic.say.correctAnswer();
  }
  logic.say.congratulations(userName);
};

export default brainCalc;
