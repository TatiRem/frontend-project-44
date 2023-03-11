import readlineSync from 'readline-sync';

const nameRequest = (request) => {
  const name = readlineSync.question(`${request} `);
  console.log(`Hello, ${name}!`);
  return name;
};
const isEven = (count) => {
  if ((count % 2) === 0) {
    return 'yes';
  }
  return 'no';
};
const userTesting = (nameUser) => {
  let numberTry = 1;
  while (numberTry <= 3) {
    const randomNumber = Math.floor(Math.random() * 50);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(randomNumber) !== answer) {
      return `'${answer}' is wrong answer ;(. Correct answer was '${isEven(randomNumber)}'.\nLet's try again, ${nameUser}!`;
    }
    console.log('Correct!');
    numberTry += 1;
  }
  return `Congratulations, ${nameUser}!`;
};

export { nameRequest, userTesting };
