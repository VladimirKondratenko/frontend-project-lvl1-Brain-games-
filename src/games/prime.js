import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundData = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const checkPrimeNumber = (num) => {
    for (let count = 2; count < num; count += 1) {
      if (num % count === 0) {
        return false;
      }
    }
    return true;
  };
  const rightAnswer = checkPrimeNumber(randomNumber) ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

const startCheckPrimeNumber = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startCheckPrimeNumber;
