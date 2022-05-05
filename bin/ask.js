import readlineSync from 'readline-sync';

const ask = (num) => readlineSync.question(`Question: ${num} `);

export default ask;
