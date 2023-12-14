import _ from 'lodash';

const getRandomOperator = () => {
  const listOfOperators = ['+', '-', '*'];
  const operator = listOfOperators[_.random(0, 2)];
  return operator;
};

export default () => {
  const startPhraseCalc = 'What is the result of the expression?';
  const randomNumber1 = _.random(1, 100);
  const randomNumber2 = _.random(1, 100);
  const randomOperator = getRandomOperator();
  const expressionPrint = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  switch (randomOperator) {
    case '+': {
      return [startPhraseCalc, expressionPrint, (randomNumber1 + randomNumber2)];
    }
    case '-': {
      return [startPhraseCalc, expressionPrint, (randomNumber1 - randomNumber2)];
    }
    case '*': {
      return [startPhraseCalc, expressionPrint, (randomNumber1 * randomNumber2)];
    }
    default: {
      return 'something went very wrong here';
    }
  }
};
