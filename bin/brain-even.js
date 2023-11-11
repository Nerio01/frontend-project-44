import readlineSync from 'readline-sync';
import _ from 'lodash';

const brainEven = () => {
    let numberOfWins = 0;
    while (numberOfWins !== 3){
        console.log('Answer "yes if the number is even, otherwise answer "no"');
        const currentRandomNumber = _.random(1, 100);
        console.log(`Question ${currentRandomNumber}`);
        const answerPrompt = readlineSync.question('You answer: ');
        if (evenOrOdd(answerPrompt) === evenOrOdd(currentRandomNumber)) {
            console.log('Correct!');
            numberOfWins += 1;
        } else {
            continue;
        }
    }
    console.log(`Congratulations, ${namePrompt}!`);
};

const evenOrOdd = (number) => {
    if (number % 2 === 0) {
        return true
    }
    return false;
};

brainEven