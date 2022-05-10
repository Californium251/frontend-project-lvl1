import generateNumber from '../utils.js';

export const condition = 'What number is missing in the progression?';

export const getQuestion = () => {
  const length = generateNumber(5, 15);
  const prog = {
    nums: {
      arr: [generateNumber()],
      missedEl: NaN,
    },
    str: '',
  };
  const diff = generateNumber();
  const numOfMissedEl = generateNumber(0, length);

  for (let i = 1; i <= length; i += 1) {
    prog.nums.arr[i] = prog.nums.arr[i - 1] + diff;
  }
  prog.nums.missedEl = prog.nums.arr[numOfMissedEl];
  prog.nums.arr[numOfMissedEl] = '..';
  prog.str = prog.nums.arr.join(' ');
  return prog;
};

export const findCorrectAnswer = (subsequence) => subsequence.missedEl.toString();
