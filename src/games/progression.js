import generateNumber from '../utils.js';
import startGame from '../index.js';

const condition = 'What number is missing in the progression?';

const getProgression = () => {
  const length = generateNumber(5, 15);
  const diff = generateNumber();
  const prog = [generateNumber()];
  for (let i = 1; i <= length; i += 1) {
    prog[i] = prog[i - 1] + diff;
  }
  return prog;
};

const getQuestionAndAnswer = () => {
  const questionAndAnswer = {};
  const prog = getProgression();
  const numOfMissedEl = generateNumber(0, prog.length - 1);

  questionAndAnswer.correctAnswer = prog[numOfMissedEl].toString();
  prog[numOfMissedEl] = '..';

  questionAndAnswer.question = prog.join(' ');

  return questionAndAnswer;
};

const brainProgression = () => {
  startGame(condition, getQuestionAndAnswer);
};

export default brainProgression;
