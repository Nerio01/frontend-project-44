import readlineSync from 'readline-sync';

export default (gameLogic) => {
  let remainingRounds = 3;

  console.log('Welcome to the Brain Games!');
  const userNamePrompt = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userNamePrompt}!`);

  while (remainingRounds !== 0) {
    const [startPhraseLine, questionLine, trueAnswer] = gameLogic();
    console.log(startPhraseLine);
    console.log(`Question: ${questionLine}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === trueAnswer) {
      remainingRounds -= 1;
      console.log('Correct!');
      if (remainingRounds === 0) {
        console.log(`Congratulations, ${userNamePrompt}!`);
        break;
      }
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${userNamePrompt}!`);
      break;
    }
  }
};
