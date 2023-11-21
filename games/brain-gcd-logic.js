import _ from 'lodash';
import { gcd } from 'mathjs';

export const start_phrase_gcd = 'Find the greatest common divisor of given numbers.';

export const brain_gcd = () => {
    const randomNumber1 = _.random(1,100);
    const randomNumber2 = _.random(1,100);
    const question_gcd = `${randomNumber1} ${randomNumber2}`; 
    const answer = gcd(randomNumber1, randomNumber2);
    
    return [question_gcd, answer];
};
 
