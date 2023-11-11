
import readlineSync from 'readline-sync';
import _ from 'lodash';
import greetAndPromptUserName from './brain-games.js';

const brainEven = () => {
    greetAndPromptUserName();
    let numberOfWins = 0;
    let answer = '';
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    while (numberOfWins !== 3) {
        const currentRandomNumber = _.random(1, 100);
        if (currentRandomNumber % 2 === 0) {
            answer = 'yes';
        } else {
            answer = 'no'
        }
        console.log(`Question ${currentRandomNumber}`);
        const answerPrompt = readlineSync.question('You answer: ');
        if (answerPrompt == answer) {
            console.log('Correct!');
            numberOfWins += 1;
            if (numberOfWins === 3) {
                console.log(`Congratulations, userName!`);
                break
            }
        } else {
            numberOfWins = 0;
            console.log(`'${answerPrompt}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log("Let's try again, userName!")
            break
        }
    };
    
};

brainEven();