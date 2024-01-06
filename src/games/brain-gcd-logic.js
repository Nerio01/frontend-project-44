import random from '../utilities.js';
import runEngine from '../index.js';

const gcdCalc = (number1, number2) => {
  let absNumber1 = Math.abs(number1);
  let absNumber2 = Math.abs(number2);
  if (absNumber1 === 0) {
    return absNumber2;
  }
  if (absNumber2 === 0) {
    return absNumber1;
  }

  while (absNumber2 !== 0) {
    const temp = absNumber2;
    absNumber2 = absNumber1 % absNumber2;
    absNumber1 = temp;
  }

  return absNumber1;
};

const generateRound = () => {
  const randomNumber1 = random(1, 100);
  const randomNumber2 = random(1, 100);
  const questionGcd = `${randomNumber1} ${randomNumber2}`;
  const answer = String(gcdCalc(randomNumber1, randomNumber2));

  return [questionGcd, answer];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers';
  runEngine(rules, generateRound);
};
