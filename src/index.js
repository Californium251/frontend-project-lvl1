import readlineSync from 'readline-sync';

// Константа с условием
export const taskCondition = {
  brainEven: 'Answer "yes" if the number is even, otherwise answer "no".',
  brainCalc: 'What is the result of the expression?',
  brainGcd: 'Find the greatest common divisor of given numbers.',
  brainProgression: 'What number is missing in the progression?',
  brainPrime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

// Сообщения пользователю
export const say = {
  welcomeMessage(name, gameName) {
    console.log(`Hello, ${name}!`);
    console.log(taskCondition[gameName]);
  },
  correctAnswer() {
    console.log('Correct!');
  },
  gameOver(actual, correct, name) {
    console.log(`'${actual}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
  },
  congratulations(name) {
    console.log(`Congratulations, ${name}!`);
  },
  ask(num) {
    return readlineSync.question(`Question: ${num} `);
  },
};

// Функции поиска правильного ответа
function findAnswerForBrainGcd(n1, n2) {
  const max = Math.max(n1, n2);
  const min = Math.min(n1, n2);
  const modulo = max % min;
  if (modulo === 0) {
    return min;
  }
  return findAnswerForBrainGcd(min, modulo);
}

export const findCorrectAnswer = {
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
  brainGcd: findAnswerForBrainGcd,
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

// Функции, которые генерируют числа
export const getNum = () => Math.round(Math.random() * 100);

export const generate = {
  num: getNum,
  operation() {
    return ['+', '-', '*'][Math.round(Math.random() * 2)];
  },
  progression(length) {
    const prog = {
      subsequence: [getNum()],
      missedEl: NaN,
    };
    const diff = getNum();
    const numOfMissedEl = Math.round(Math.random() * length);

    for (let i = 1; i <= length; i += 1) {
      prog.subsequence[i] = prog.subsequence[i - 1] + diff;
    }

    prog.missedEl = prog.subsequence[numOfMissedEl];
    prog.subsequence[numOfMissedEl] = '..';

    return prog;
  },
};
