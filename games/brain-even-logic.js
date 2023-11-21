import _ from 'lodash';

export const start_phrase_even = 'Answer "yes" if the number is even, otherwise answer "no"';

export const brainEven = () => {
    let answer = '';
    const currentRandomNumber = _.random(1,100);
    if (currentRandomNumber % 2 === 0) {
        answer = 'yes';
    } else {
        answer = 'no'
    }
    const question_even = `${currentRandomNumber}`;

    return [question_even, answer];    
};
