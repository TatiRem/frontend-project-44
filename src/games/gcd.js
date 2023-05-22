import runLogicGame, { getRandomInt, numberOfRounds } from '../index.js';

const getGCD = (firstNumber, secondNumber) => {
  let firstCount = firstNumber;
  let secondCount = secondNumber;
  while ((firstCount !== 0) && (secondCount !== 0)) {
    if (firstCount > secondCount) {
      firstCount %= secondCount;
    } else {
      secondCount %= firstCount;
    }
  }
  return firstCount + secondCount;
};

const getRoundsValue = () => {
  const arrayRounds = [];
  const maxValue = 50;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomInt(maxValue);
    const secondNumber = getRandomInt(maxValue);
    const question = `${firstNumber} ${secondNumber}`;
    const rightAnswer = getGCD(firstNumber, secondNumber);
    arrayRounds[i] = [question, String(rightAnswer)];
  }
  return arrayRounds;
};

const runBrainGCD = () => {
  const discription = 'Find the greatest common divisor of given numbers.';
  runLogicGame(getRoundsValue(), discription);
};

export default runBrainGCD;
