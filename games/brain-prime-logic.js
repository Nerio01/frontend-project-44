import _ from 'lodash';

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
