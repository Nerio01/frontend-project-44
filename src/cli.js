import readlineSync from 'readline-sync';

export default () => {
  const namePrompt = readlineSync.question('May I have your name? ');
  const savedName = `Hello, ${namePrompt}!`;
  console.log(savedName);
};
