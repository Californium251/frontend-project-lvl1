const findCorrectAnswer = {
  brainEven(num) {
    return num % 2 === 0 ? 'yes' : 'no';
  },
  brainCalc(n1, n2, op) {
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
  brainProgression(progression) {
    return progression.missedEl;
  },
  brainPrime(n) {
    for (let i = 2; i <= n / 2; i += 1) {
      if (n % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  },
};

export default findCorrectAnswer;
