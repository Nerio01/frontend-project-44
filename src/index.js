import readlineSync from 'readline-sync';

export default (gameLogic) => {
  const totalRounds = 3;

  console.log('Welcome to the Brain Games!');
  const userNamePrompt = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userNamePrompt}!`);

  for (let rounds = 0; rounds < totalRounds; rounds += 1) {
    const [startPhraseLine, questionLine, trueAnswer] = gameLogic();
    if (rounds === 0) {
      console.log(startPhraseLine);
    }
    console.log(`Question: ${questionLine}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${userNamePrompt}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userNamePrompt}!`);
};
