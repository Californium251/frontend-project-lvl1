import userName from '../cli.js';
import * as logic from '../index.js';

const brainPrime = () => {
  const gameName = 'brainPrime';
  logic.say.welcomeMessage(userName, gameName);

  for (let i = 0; i <= 2; i += 1) {
    const num = logic.generate.num();
    const userAnswer = logic.say.ask(num);
    const correctAnswer = logic.findCorrectAnswer[gameName](num);
    if (userAnswer !== correctAnswer) {
      logic.say.gameOver(userAnswer, correctAnswer, userName);
      return;
    }
    logic.say.correctAnswer();
  }
  logic.say.congratulations(userName);
};

export default brainPrime;
