import _ from 'lodash';
import { gcd } from 'mathjs';

export const gcdQuestion = 'Find the greatest common divisor of given numbers.';

export const brain_gcd = () => {
    const randomNumber1 = _.random(1,100);
    const randomNumber2 = _.random(1,100);
    const questionGcdArray = [randomNumber1, randomNumber2];
    const question_gcd = questionGcdArray.join(' '); 
    const answer = gcd(randomNumber1, randomNumber2);
    return [question_gcd, answer];
};
 
export default brain_gcd;
