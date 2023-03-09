import readlineSync from 'readline-sync';

const nameRequest = (request) => {
  const name = readlineSync.question(`${request} `);
  console.log(`Hello, ${name}!`);
};

export default nameRequest;
