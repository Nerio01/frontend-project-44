import _ from 'lodash';
import { isPrime } from 'mathjs';

export default () => {
  const startPhrasePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generatedNumber = _.random(1, 100);
  const primeCheck = isPrime(generatedNumber);
  let answer = '';
  if (primeCheck === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  const questionPrime = `${generatedNumber}`;
  return [startPhrasePrime, questionPrime, answer];
};
