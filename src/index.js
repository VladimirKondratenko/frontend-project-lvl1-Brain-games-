import readlineSync from 'readline-sync';

const engine = (gameTitle, getGameRound) => {
  const getUserName = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
    return userName;
  };

  const userName = getUserName();
  const numberOfRounds = 3;
  console.log(gameTitle);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [gameQuestion, rightAnswer] = getGameRound();
    console.log(`Question: ${gameQuestion}`);
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

export default engine;
