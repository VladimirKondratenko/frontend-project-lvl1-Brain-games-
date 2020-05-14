import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrimeNumber = (num) => {
  for (let count = 2; count < num; count += 1) {
    if (num % count === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const number = generateRandomNumber(1, 100);
  const rightAnswer = checkPrimeNumber(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

const startCheckPrimeNumber = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startCheckPrimeNumber;
