import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const getRoundData = () => {
  const randomNumberOne = generateRandomNumber(1, 100);
  const randomNumberTwo = generateRandomNumber(1, 100);
  const question = [randomNumberOne, randomNumberTwo].join(' ');
  let rightAnswer = 2;
  for (let count = randomNumberOne; count > 0; count -= 1) {
    if (randomNumberOne % count === 0 && randomNumberTwo % count === 0) {
      rightAnswer = count;
      break;
    } else {
      rightAnswer = 0;
    }
  }
  return [question, rightAnswer];
};

const startGcdGame = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startGcdGame;
