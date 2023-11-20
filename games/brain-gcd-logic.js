import _ from 'lodash';
import { gcd } from 'mathjs';

const getRandomNumber = () => {
    const randomNumber = _.random(1,100);
    return randomNumber;
};

export const gcdQuestion = 'Find the greatest common divisor of given numbers.';

export const brain_gcd = () => {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const questionGcd = `Question: ${randomNumber1} ${randomNumber2}`;
    const answer = gcd(randomNumber1, randomNumber2);
    return [questionGcd, answer];
};
 
export default brain_gcd;
