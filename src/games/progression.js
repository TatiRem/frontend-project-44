import runLogicGame, { getRandomInt, numberOfRounds } from '../index.js';

const getRecordProgression = (number, randomMember, start, step) => {
  let recordProgression = '';
  for (let i = 1; i <= number; i += 1) {
    const memberValue = start + (i - 1) * step;
    if (i === randomMember) {
      recordProgression += '.. ';
    } else {
      recordProgression += `${memberValue} `;
    }
  }
  return recordProgression;
};

const getRoundsValue = () => {
  const arrayRounds = [];
  const maxValue = 50;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const numberMembers = 10;
    const randomMember = getRandomInt(numberMembers);
    const beginRandomProgression = getRandomInt(maxValue);
    const stepRandomProgression = getRandomInt(maxValue);
    const question = getRecordProgression(
      numberMembers,
      randomMember,
      beginRandomProgression,
      stepRandomProgression,
    );
    const rightAnswer = beginRandomProgression + (randomMember - 1) * stepRandomProgression;
    arrayRounds[i] = [question, String(rightAnswer)];
  }
  return arrayRounds;
};

const runBrainProgression = () => {
  const discription = 'What number is missing in the progression?';
  runLogicGame(getRoundsValue(), discription);
};

export default runBrainProgression;
