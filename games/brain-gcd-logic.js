import _ from 'lodash';
import { gcd } from 'mathjs';

const getRandomNumber = () => {
    const randomNumber = _.random(1,100);
    return randomNumber;
};

export const gcdQuestion = 'Find the greatest common divisor of given numbers.';

export const brain_gcd = () => {
    const number_1 = getRandomNumber();
    const number_2 = getRandomNumber();
    const question_gcd = `Question: ${number_1} ${number_2}`;
    const totally_legit_gcd = `${question_gcd}`;
    const answer = gcd(number_1, number_2);
    return [totally_legit_gcd, answer];
}

export default brain_gcd;
