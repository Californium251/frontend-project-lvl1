import generateNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const num = generateNumber();
  return {
    question: num.toString(),
    correctAnswer: isEven(num) ? 'yes' : 'no',
  };
};
