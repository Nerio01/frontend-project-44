import readlineSync from 'readline-sync';

export const gameFlow = (gameLogic, startPhrase) => {
    const maxRounds = 3;
    let numberOfRounds = 0;

    console.log('Welcome to the Brain Games!');
    const userNamePrompt = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userNamePrompt}!`);
    console.log(startPhrase);
    
    while (numberOfRounds !== maxRounds) {
        const generateGameValues = gameLogic();
        const description = generateGameValues[0];
        console.log(`Question: ${description}`);
        const userAnswer = readlineSync.question('Your answer: ');
        
        if (userAnswer === String(generateGameValues[1])) {
            numberOfRounds += 1;
            console.log('Correct!');
            if (numberOfRounds === maxRounds) {
                console.log(`Congratulations, ${userNamePrompt}!`);
                break
            }
        } else {
            console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${generateGameValues[1]}'.`);
            console.log(`Let's try again, ${userNamePrompt}!`);
            break;
        }
    };
};