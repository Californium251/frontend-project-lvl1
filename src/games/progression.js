import userName from '../cli.js';
import * as logic from '../index.js';

const brainProgression = () => {
  const gameName = 'brainProgression';
  logic.say.welcomeMessage(userName, gameName);

  for (let i = 0; i <= 2; i += 1) {
    const prog = logic.generate.progression(logic.generate.num());
    const userAnswer = logic.say.ask(prog.subsequence.join(' '));

    if (+userAnswer !== logic.findCorrectAnswer[gameName](prog)) {
      logic.say.gameOver(userAnswer, prog.missedEl, userName);
      return;
    }
    logic.say.correctAnswer();
  }
  logic.say.congratulations(userName);
};

export default brainProgression;
