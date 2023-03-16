import readlineSync from 'readline-sync';

const nameRequest = () => {
  const request = 'May I have your name?';
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
const getRandomInt = (max) => Math.floor((Math.random() * max) + 1);
// Функция getRandomCalc возвращает массив, первый элемент которого это значение выражения,
// второй - знак вычисления
const getRandomCalc = (firstNumber, secondNumber) => {
  const numberOperation = 3;
  let sign;
  let result;
  switch (getRandomInt(numberOperation)) {
    case 1:
      sign = '+';
      result = firstNumber + secondNumber;
      break;
    case 2:
      sign = '-';
      result = firstNumber - secondNumber;
      break;
    case 3:
      sign = '*';
      result = firstNumber * secondNumber;
      break;
    default:
  }
  return [sign, result];
};
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
const askQuestion = (nameGame) => {
  const maxInt = 50;
  let expression;
  switch (nameGame) {
    case 'even':
      expression = getRandomInt(maxInt);
      console.log(`Question: ${expression}`);
      break;
    case 'calc': {
      const firstVariabal = getRandomInt(maxInt);
      const secondVariabal = getRandomInt(maxInt);
      const signAndResult = getRandomCalc(firstVariabal, secondVariabal);
      [, expression] = signAndResult;
      console.log(`Question: ${firstVariabal} ${signAndResult[0]} ${secondVariabal}`);
      break;
    }
    case 'gcd': {
      const firstVariabal = getRandomInt(maxInt);
      const secondVariabal = getRandomInt(maxInt);
      expression = getGCD(firstVariabal, secondVariabal);
      console.log(`Question: ${firstVariabal} ${secondVariabal}`);
      break;
    }
    default:
  }
  return expression;
};
const getAnswer = () => readlineSync.question('Your answer: ');
const compareAnswer = (userName, nameGame, answer, userAnswer) => {
  let rightAnswer;
  switch (nameGame) {
    case 'even':
      rightAnswer = isEven(answer);
      break;
    case 'calc':
      rightAnswer = answer;
      break;
    case 'gcd':
      rightAnswer = answer;
      break;
    default:
  }
  return String(rightAnswer) === userAnswer;
};
const threeStagesGame = (userName, nameGame) => {
  let numberTry = 1;
  while (numberTry <= 3) {
    const meanExpression = askQuestion(nameGame);
    const userAnswer = getAnswer();
    if (!compareAnswer(userName, nameGame, meanExpression, userAnswer)) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${meanExpression}'.
Let's try again, ${userName}!`;
    }
    console.log('Correct!');

    numberTry += 1;
  }
  return `Congratulations, ${userName}!`;
};

export { threeStagesGame, nameRequest };
