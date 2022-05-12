import generateNumber from '../utils.js';
import startGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const num = generateNumber();
  return {
    question: num.toString(),
    correctAnswer: isEven(num) ? 'yes' : 'no',
  };
};

const brainEven = () => {
  startGame(condition, getQuestionAndAnswer);
};

export default brainEven;
