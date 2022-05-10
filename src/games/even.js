import generateNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestion = () => {
  const num = generateNumber();

  return {
    nums: num,
    str: num,
  };
};

export const findCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');
