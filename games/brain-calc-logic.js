import _ from 'lodash';

export const startPhraseCalc = 'What is the result of the expression?';

const getRandomOperator = () => {
  const listOfOperators = ['+', '-', '*'];
  const operator = listOfOperators[_.random(0, 2)];
  return operator;
};

export const brainCalc = () => {
  const randomNumber1 = _.random(1, 100);
  const randomNumber2 = _.random(1, 100);
  const randomOperator = getRandomOperator();
  const expressionPrint = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  switch (randomOperator) {
    case '+': {
      return [expressionPrint, (randomNumber1 + randomNumber2)];
    }
    case '-': {
      return [expressionPrint, (randomNumber1 - randomNumber2)];
    }
    case '*': {
      return [expressionPrint, (randomNumber1 * randomNumber2)];
    }
    default: {
      return null;
    }
  }
};
