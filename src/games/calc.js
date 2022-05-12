import generateNumber from '../utils.js';
import startGame from '../index.js';

const makeCalc = (n1, n2, op) => {
  if (op === '+') {
    return n1 + n2;
  }
  if (op === '-') {
    return n1 - n2;
  }
  if (op === '*') {
    return n1 * n2;
  }
  return NaN;
};

const condition = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const firstNum = generateNumber();
  const secondNum = generateNumber();
  const operations = ['+', '-', '*'];
  const operation = operations[generateNumber(0, operations.length - 1)];
  const questionAndAnswer = {};
  questionAndAnswer.question = `${firstNum} ${operation} ${secondNum}`;
  questionAndAnswer.correctAnswer = makeCalc(firstNum, secondNum, operation).toString();

  return questionAndAnswer;
};

const brainCalc = () => {
  startGame(condition, getQuestionAndAnswer);
};

export default brainCalc;
