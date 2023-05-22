import runLogicGame, { getRandomInt, numberOfRounds } from '../index.js';

const sings = ['+', '-', '*'];
const getRandomSign = (singArray) => singArray[getRandomInt(sings.length - 1)];

const getRoundsValue = () => {
  const arrayRounds = [];
  const maxValue = 50;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomInt(maxValue);
    const secondNumber = getRandomInt(maxValue);
    const sign = getRandomSign(sings);
    const question = `${firstNumber} ${sign} ${secondNumber}`;
    let rightAnswer;
    switch (sign) {
      case '+':
        rightAnswer = firstNumber + secondNumber;
        break;
      case '-':
        rightAnswer = firstNumber - secondNumber;
        break;
      case '*':
        rightAnswer = firstNumber * secondNumber;
        break;
      default: Error('Output error!');
    }
    arrayRounds[i] = [question, String(rightAnswer)];
  }
  return arrayRounds;
};

const runBrainCalc = () => {
  const discription = 'What is the result of the expression?';
  runLogicGame(getRoundsValue(), discription);
};

export default runBrainCalc;
