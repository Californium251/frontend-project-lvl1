export const num = () => Math.round(Math.random() * 100);

export const operation = () => ['+', '-', '*'][Math.round(Math.random() * 2)];

export const progression = (length) => {
  const prog = {
    subsequence: [num()],
    missedEl: NaN,
  };
  const diff = num();
  const numOfMissedEl = Math.round(Math.random() * length);

  for (let i = 1; i <= length; i += 1) {
    prog.subsequence[i] = prog.subsequence[i - 1] + diff;
  }

  prog.missedEl = prog.subsequence[numOfMissedEl];
  prog.subsequence[numOfMissedEl] = '..';

  return prog;
};
