import generateNumber from '../utils.js';
import startGame from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const findGcd = (n1, n2) => {
  const max = Math.max(n1, n2);
  const min = Math.min(n1, n2);
  const modulo = max % min;
  if (modulo === 0) {
    return min;
  }
  return findGcd(min, modulo);
};

const getQuestionAndAnswer = () => {
  const firstNum = generateNumber(1, 100);
  const secondNum = generateNumber(1, 100);

  return {
    question: `${firstNum} ${secondNum}`,
    correctAnswer: findGcd(firstNum, secondNum).toString(),
  };
};

const brainGcd = () => {
  startGame(condition, getQuestionAndAnswer);
};

export default brainGcd;
