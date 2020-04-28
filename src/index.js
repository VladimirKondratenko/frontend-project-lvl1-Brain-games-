import readlineSync from 'readline-sync';
import getUserName from './games/games';

const engine = (gameName, gameQuestion, rightAnswer) => {
  const userName = getUserName();
  console.log(gameName);
  for (let i = 0; i < 3; i += 1) {
    console.log(gameQuestion);
    const answer = readlineSync.question('Your answer: ');
    if (rightAnswer === parseInt(answer, 10)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};

export default engine;
