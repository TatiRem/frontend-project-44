import runLogicGame, { getRandomInt, numberOfRounds } from '../index.js';

const isPrime = (count) => {
  if (count === 1) {
    return false;
  }
  const halfCount = Math.floor(count / 2);
  for (let i = 2; i <= halfCount; i += 1) {
    if ((count % i) === 0) {
      return false;
    }
  }
  return true;
};

const getRoundsValue = () => {
  const arrayRounds = [];
  const maxValue = 50;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomInt(maxValue);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    arrayRounds[i] = [question, rightAnswer];
  }
  return arrayRounds;
};

const runBrainPrime = () => {
  const discription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runLogicGame(getRoundsValue(), discription);
};

export default runBrainPrime;
