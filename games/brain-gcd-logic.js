import _ from 'lodash';
import { gcd } from 'mathjs';

export default () => {
  const startPhraseGcd = 'Find the greatest common divisor of given numbers.';
  const randomNumber1 = _.random(1, 10);
  const randomNumber2 = _.random(1, 10);
  const questionGcd = `${randomNumber1} ${randomNumber2}`;
  const answer = gcd(randomNumber1, randomNumber2);

  return [startPhraseGcd, questionGcd, answer];
};
