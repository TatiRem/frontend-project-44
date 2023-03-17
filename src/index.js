import readlineSync from 'readline-sync';

const nameRequest = () => {
  const request = 'May I have your name?';
  const name = readlineSync.question(`${request} `);
  console.log(`Hello, ${name}!`);
  return name;
};
const task = (nameGame) => {
  switch (nameGame) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
  }
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
const isPrime = (value) => {
  let result = 'no';
  const arrPrimeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  for (let i = 0; i < arrPrimeNumbers.length; i += 1) {
    if (arrPrimeNumbers[i] === value) {
      result = 'yes';
    }
  }
  return result;
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
    case 'progression': {
      const numberMembers = 10;
      const randomMember = getRandomInt(numberMembers);
      const beginRandomProgression = getRandomInt(maxInt);
      const stepRandomProgression = getRandomInt(maxInt);
      let recordProgression = '';
      for (let i = 1; i <= numberMembers; i += 1) {
        const memberValue = beginRandomProgression + (i - 1) * stepRandomProgression;
        if (i === randomMember) {
          recordProgression += '.. ';
          expression = memberValue;
        } else {
          recordProgression += `${memberValue} `;
        }
      }
      console.log(recordProgression);
      break;
    }
    case 'prime': {
      expression = getRandomInt(maxInt);
      console.log(`Question: ${expression}`);
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
    case 'progression':
      rightAnswer = answer;
      break;
    case 'prime':
      rightAnswer = isPrime(answer);
      break;
    default:
  }
  return String(rightAnswer) === userAnswer;
};
const threeStagesGame = (userName, nameGame) => {
  let numberTry = 1;
  while (numberTry <= 3) {
    let meanExpression = askQuestion(nameGame);
    const userAnswer = getAnswer();
    if (!compareAnswer(userName, nameGame, meanExpression, userAnswer)) {
      if (nameGame === 'even') {
        meanExpression = isEven(meanExpression);
      }
      if (nameGame === 'prime') {
        meanExpression = isPrime(meanExpression);
      }
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${meanExpression}'.
Let's try again, ${userName}!`;
    }
    console.log('Correct!');

    numberTry += 1;
  }
  return `Congratulations, ${userName}!`;
};

export { threeStagesGame, nameRequest, task };
