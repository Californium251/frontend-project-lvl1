const findCorrectAnswer = {
  brainEven: function findCorrectAnswer(num) {
    return num % 2 === 0 ? 'yes' : 'no';
  },
  brainCalc: function findCorrectAnswer(n1, n2, op) {
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
  },
  brainGcd(n1, n2) {
    const max = Math.max(n1, n2);
    const min = Math.min(n1, n2);
    const modulo = max % min;
    if (modulo === 0) {
      return min;
    }
    return this.brainGcd(min, modulo);
  },
};

export default findCorrectAnswer;