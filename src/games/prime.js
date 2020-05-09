import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundData = () => {
  const randomNumber = generateRandomNumber(1, 100);
  let rightAnswer;
  for (let count = 2; count < randomNumber; count += 1) {
    if (randomNumber % count === 0) {
      rightAnswer = 'no';
      return [randomNumber, rightAnswer];
    }
  }
  rightAnswer = 'yes';
  return [randomNumber, rightAnswer];
};

const startCheckPrimeNumber = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startCheckPrimeNumber;
