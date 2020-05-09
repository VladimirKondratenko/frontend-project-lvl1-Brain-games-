import generateRandomNumber from '../utils';
import starteEngine from '../index';

const checkEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const gameTitle = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const randomNumber = generateRandomNumber(1, 1000);
  const rightAnswer = checkEven(randomNumber);
  return [randomNumber, rightAnswer];
};

const startCheckEvenNumber = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startCheckEvenNumber;
