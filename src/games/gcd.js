import generateNumber from '../utils.js';

const findGcd = (n1, n2) => {
  const max = Math.max(n1, n2);
  const min = Math.min(n1, n2);
  const modulo = max % min;
  if (modulo === 0) {
    return min;
  }
  return findGcd(min, modulo);
};

export const condition = 'Find the greatest common divisor of given numbers.';

export const getQuestionAndAnswer = () => {
  const firstNum = generateNumber(1, 100);
  const secondNum = generateNumber(1, 100);

  return {
    question: `${firstNum} ${secondNum}`,
    correctAnswer: findGcd(firstNum, secondNum).toString(),
  };
};
