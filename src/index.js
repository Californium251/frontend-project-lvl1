import readlineSync from 'readline-sync';

const startGame = (condition, getQuestionAndAnswer) => {
  const userName = readlineSync.question('May I have your name? ');
  const roundsCount = 3;

  console.log(`Hello, ${userName}!`);
  console.log(condition);

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${question} `);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
