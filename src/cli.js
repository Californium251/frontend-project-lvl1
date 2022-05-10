import readlineSync from 'readline-sync';

const cli = (condition) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  return userName;
};

export default cli;
