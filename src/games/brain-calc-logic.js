import random from '../utilities.js';

const getRandomOperator = () => {
  const listOfOperators = ['+', '-', '*'];
  const operator = listOfOperators[random(0, 2)];
  return operator;
};

export default () => {
  const startPhraseCalc = 'What is the result of the expression?';
  const randomNumber1 = random(1, 100);
  const randomNumber2 = random(1, 100);
  const randomOperator = getRandomOperator();
  const expressionPrint = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  let answer = '';
  switch (randomOperator) {
    case '+': {
      answer = String(randomNumber1 + randomNumber2);
      break;
    }
    case '-': {
      answer = String(randomNumber1 - randomNumber2);
      break;
    }
    case '*': {
      answer = String(randomNumber1 * randomNumber2);
      break;
    }
    default: {
      throw new Error(`Unknown operator: '${randomOperator}'!`);
    }
  }
  return [startPhraseCalc, expressionPrint, answer];
};
