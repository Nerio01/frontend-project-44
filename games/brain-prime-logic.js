import _ from "lodash";
import { isPrime } from "mathjs";

export const start_phrase_prime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const brain_prime = () => {
    const generated_number = _.random(1,100);
    const prime_check = isPrime(generated_number);
    let answer = '';
    if (prime_check === true) {
        answer = 'yes'
    } else {
        answer = 'no'
    }
    const question_prime = `${generated_number}`;
    return [question_prime, answer];
};

