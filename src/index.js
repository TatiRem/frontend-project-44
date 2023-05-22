import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

export const getRandomInt = (max) => Math.floor((Math.random() * max) + 1);

const runLogicGame = (roundsOfGame, descriptionTask) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(descriptionTask);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = roundsOfGame[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runLogicGame;
