import random from '../utilities.js';
import runEngine from '../index.js';

const getRandomOperator = () => {
  const listOfOperators = ['+', '-', '*'];
  const operator = listOfOperators[random(0, 2)];
  return operator;
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const randomNumber1 = random(1, 100);
  const randomNumber2 = random(1, 100);
  const randomOperator = getRandomOperator();
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const answer = String(calculation(randomNumber1, randomNumber2, randomOperator));
  return [question, answer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, generateRound);
};
