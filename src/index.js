import readlineSync from 'readline-sync';
import getUserName from './games/games';

const engine = (gameName, getGameRound) => {
  const userName = getUserName();
  console.log(gameName);
  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, gameAnswer] = getGameRound();
    console.log(`Question: ${gameQuestion.join(' ')}`);
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
