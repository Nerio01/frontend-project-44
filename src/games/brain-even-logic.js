import random from '../utilities.js';
import runEngine from '../index.js';

const generateRound = () => {
  let answer = '';
  const currentRandomNumber = random(1, 100);
  if (currentRandomNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  const question = currentRandomNumber;

  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  runEngine(rules, generateRound);
};
