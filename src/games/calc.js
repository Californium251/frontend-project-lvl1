import generateNumber from '../utils.js';

const getOperation = () => ['+', '-', '*'][generateNumber(0, 2)];

export const condition = 'What is the result of the expression?';

export const getQuestion = () => {
  const firstNum = generateNumber();
  const secondNum = generateNumber();
  const operation = getOperation();

  return {
    nums: {
      firstNum,
      secondNum,
      operation,
    },
    str: `${firstNum} ${operation} ${secondNum}`,
  };
};

const makeCalculation = (expression) => {
  if (expression.operation === '+') {
    return expression.firstNum + expression.secondNum;
  }
  if (expression.operation === '-') {
    return expression.firstNum - expression.secondNum;
  }
  if (expression.operation === '*') {
    return expression.firstNum * expression.secondNum;
  }
  return NaN;
};

export const findCorrectAnswer = (num) => makeCalculation(num).toString();
