import _ from 'lodash';

const gcdCalc = (number1, number2) => {
  let absNumber1 = Math.abs(number1);
  let absNumber2 = Math.abs(number2);
  if (absNumber1 === 0) {
    return absNumber2
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
}

export default () => {
  const startPhraseGcd = 'Find the greatest common divisor of given numbers';
  const randomNumber1 = _.random(1, 100);
  const randomNumber2 = _.random(1, 100);
  const questionGcd = `${randomNumber1} ${randomNumber2}`;
  const answer = gcdCalc(randomNumber1, randomNumber2);

  return [startPhraseGcd, questionGcd, answer];
};
