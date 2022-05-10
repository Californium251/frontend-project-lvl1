import generateNumber from '../utils.js';

const getOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[generateNumber(0, operations.length - 1)];
};

export const condition = 'What is the result of the expression?';

export const getQuestionAndAnswer = () => {
  const firstNum = generateNumber();
  const secondNum = generateNumber();
  const operation = getOperation();
  const questionAndAnswer = {};

  questionAndAnswer.question = `${firstNum} ${operation} ${secondNum}`;

  if (operation === '+') {
    questionAndAnswer.correctAnswer = (firstNum + secondNum).toString();
  }
  if (operation === '-') {
    questionAndAnswer.correctAnswer = (firstNum - secondNum).toString();
  }
  if (operation === '*') {
    questionAndAnswer.correctAnswer = (firstNum * secondNum).toString();
  }

  return questionAndAnswer;
};
