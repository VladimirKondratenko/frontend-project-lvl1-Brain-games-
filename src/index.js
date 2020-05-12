import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const startEngine = (gameTitle, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(gameTitle);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, rightAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (rightAnswer !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export default startEngine;
