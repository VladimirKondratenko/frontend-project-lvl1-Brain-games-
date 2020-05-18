import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let count = 2; count < num; count += 1) {
    if (num % count === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const question = generateRandomNumber(1, 100);
  const rightAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [String(question), rightAnswer];
};

const startCheckPrimeNumber = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startCheckPrimeNumber;
