import runLogicGame, { getRandomInt, numberOfRounds } from '../index.js';

const isEven = (count) => count % 2 === 0;

const getRoundsValue = () => {
  const arrayRounds = [];
  const maxValue = 50;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomInt(maxValue);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    arrayRounds[i] = [question, rightAnswer];
  }
  return arrayRounds;
};

const runBrainEven = () => {
  const discription = 'Answer "yes" if the number is even, otherwise answer "no".';
  runLogicGame(getRoundsValue(), discription);
};

export default runBrainEven;
