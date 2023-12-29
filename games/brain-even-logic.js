import random from '../src/utilities.js';

export default () => {
  const startPhraseEven = 'Answer "yes" if the number is even, otherwise answer "no"';
  let answer = '';
  const currentRandomNumber = random(1, 100);
  if (currentRandomNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  const questionEven = currentRandomNumber;

  return [startPhraseEven, questionEven, answer];
};
