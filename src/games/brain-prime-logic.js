import random from '../utilities.js';
import runEngine from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const generatedNumber = random(1, 100);
  const primeCheck = isPrime(generatedNumber);
  let answer = '';
  if (primeCheck === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  const question = `${generatedNumber}`;
  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, generateRound);
};
