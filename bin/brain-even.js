#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

const brainEven = () => {
    const namePrompt = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${namePrompt}!`);
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
                console.log(`Congratulations, ${namePrompt}!`);
                break
            }
        } else {
            numberOfWins = 0;
            console.log(`'${answerPrompt}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${namePrompt}!`)
            break
        }
    };
    
};

brainEven();