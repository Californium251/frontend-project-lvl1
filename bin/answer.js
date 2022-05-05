export const weclomeMessage = (name) => {
  console.log(`Hello, ${name}!`);
};

export const correctAnswer = () => {
  console.log('Correct!');
};

export const gameOver = (actual, correct, name) => {
  console.log(`'${actual}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};
