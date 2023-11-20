import _ from 'lodash';

const getRandomNumber = () => {
    const randomNumber = _.random(1,100);
    return randomNumber;
};

export const question_even = 'Answer "yes" if the number is even, otherwise answer "no"';

export const brainEven = () => {
    let answer = '';
    const currentRandomNumber = getRandomNumber();
    if (currentRandomNumber % 2 === 0) {
        answer = 'yes';
    } else {
         answer = 'no'
    }
    const evenQuestion = `${currentRandomNumber}`;
    return [evenQuestion, answer];    
};
    

export default brainEven;
