import userName from '../cli.js';
import * as logic from '../index.js';

const brainGcd = () => {
  const gameName = 'brainGcd';
  logic.say.welcomeMessage(userName, gameName);

  for (let i = 0; i <= 2; i += 1) {
    const firstNum = logic.generate.num();
    const secondNum = logic.generate.num();
    const correctAnswer = logic.findCorrectAnswer[gameName](firstNum, secondNum);

    const userAnswer = logic.say.ask(`${firstNum} ${secondNum}`);

    if (+userAnswer !== correctAnswer) {
      logic.say.gameOver(userAnswer, correctAnswer, userName);
      return;
    }
    logic.say.correctAnswer();
  }
  logic.say.congratulations(userName);
};

export default brainGcd;
