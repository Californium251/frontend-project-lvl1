import generateNumber from '../utils.js';

export const condition = 'What number is missing in the progression?';

export const getQuestionAndAnswer = () => {
  const length = generateNumber(5, 15);
  const diff = generateNumber();
  const numOfMissedEl = generateNumber(0, length);
  const prog = [generateNumber()];
  const questionAndAnswer = {};

  for (let i = 1; i <= length; i += 1) {
    prog[i] = prog[i - 1] + diff;
  }

  questionAndAnswer.correctAnswer = prog[numOfMissedEl].toString();

  prog[numOfMissedEl] = '..';
  questionAndAnswer.question = prog.join(' ');

  return questionAndAnswer;
};
