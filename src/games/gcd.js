import generateRandomNumber from '../utils';
import engine from '../index';

const startGcdGame = () => {
  const gameTitle = 'Find the greatest common divisor of given numbers.';
  const getGameRound = () => {
    const randomNumberOne = generateRandomNumber(100);
    const randomNumberTwo = generateRandomNumber(100);
    const gameQuestion = [randomNumberOne, randomNumberTwo].join(' ');
    let rightAnswer = 2;
    for (let count = randomNumberOne; count > 0; count -= 1) {
      if (randomNumberOne % count === 0 && randomNumberTwo % count === 0) {
        rightAnswer = count;
        break;
      } else {
        rightAnswer = 0;
      }
    }
    return [gameQuestion, rightAnswer];
  };
  engine(gameTitle, getGameRound);
};

export default startGcdGame;
