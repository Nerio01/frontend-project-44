import mathJs from "math.js";
import _ from "lodash";

export const questionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const brain_prime = () => {
    const generated_number = _.random(1,100);
    const prime_check = mathJs.isPrime(generated_number);
    let answer = '';
    if (prime_check === true) {
        answer = 'yes'
    } else {
        answer = 'no'
    }
    const question_prime = `Question: ${generated_number}`;
    return [question_prime, answer];
} 

export default brain_prime;