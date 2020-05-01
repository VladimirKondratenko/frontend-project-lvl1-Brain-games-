import readlineSync from 'readline-sync';

const engine = (gameTitle, getGameRound) => {
  const getUserName = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
    return userName;
  };

  const userName = getUserName();
  console.log(gameTitle);
  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, gameAnswer] = getGameRound();
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(gameAnswer) === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${gameAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default engine;
