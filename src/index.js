import readlineSync from 'readline-sync';

export default (gameLogic) => {
  const maxRounds = 3;
  let numberOfRounds = 0;

  console.log('Welcome to the Brain Games!');
  const userNamePrompt = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userNamePrompt}!`);
  let startPhraseUsed = 0;

  while (numberOfRounds !== maxRounds) {
    const [startPhraseLine, questionLine, trueAnswer] = gameLogic();
    if (startPhraseUsed === 0) {
      console.log(startPhraseLine);
    }
    console.log(`Question: ${questionLine}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === trueAnswer) {
      numberOfRounds += 1;
      console.log('Correct!');
      startPhraseUsed = 1;
      if (numberOfRounds === maxRounds) {
        console.log(`Congratulations, ${userNamePrompt}!`);
        startPhraseUsed = 0;
        break;
      }
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${userNamePrompt}!`);
      startPhraseUsed = 0;
      break;
    }
  }
};
