import readlineSync from 'readline-sync';

export default (gameLogic) => {
  const maxRounds = 3;
  let numberOfRounds = 0;

  console.log('Welcome to the Brain Games!');
  const userNamePrompt = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userNamePrompt}!`);
  const startPhraseLine = gameLogic();
  console.log(startPhraseLine[0]);

  while (numberOfRounds !== maxRounds) {
    const generateGameValues = gameLogic();
    const newQuestion = `Question: ${generateGameValues[1]}`;
    console.log(newQuestion);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(generateGameValues[2])) {
      numberOfRounds += 1;
      console.log('Correct!');
      if (numberOfRounds === maxRounds) {
        console.log(`Congratulations, ${userNamePrompt}!`);
        break;
      }
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${generateGameValues[2]}'.`);
      console.log(`Let's try again, ${userNamePrompt}!`);
      break;
    }
  }
};
