import generateNumber from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getQuestion = () => {
  const num = generateNumber();

  return {
    nums: num,
    str: num,
  };
};

export const findCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');
