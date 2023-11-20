import _ from 'lodash';
import { gcd } from 'mathjs';

const getRandomNumber = () => {
    const randomNumber = _.random(1,100);
    return randomNumber;
};

export const gcdQuestion = 'Find the greatest common divisor of given numbers.';

export const brain_gcd = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    ///const questionGcd = `Question: ${number_1} ${number_2}`;
    const answer = gcd(number1, number2);
    return [`Question: ${number1} ${number2}`, answer];
};
 
export default brain_gcd;
