import readlineSync from 'readline-sync';
const compareAnswer = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer[1]) {
        return true;
    } else {
        return false;
    };
};

const gameFlow = () => {
    let numberOfRounds = 0;
    console.log('Welcome to the Brain Games!');
    const userNamePrompt = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userNamePrompt}!`);
    /// QuestionPrompt
    /// Question
    /// if question answer is true 3x in a row 
    /// congratulate player
    /// OR break from the game 
}

console.log(compareAnswer(1, [0,1]));