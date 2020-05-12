import generateRandomNumber from '../utils';
import starteEngine from '../index';

const checkEven = (number) => (number % 2 === 0);

const gameTitle = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const number = generateRandomNumber(1, 1000);
  const rightAnswer = checkEven(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

const startCheckEvenNumber = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startCheckEvenNumber;
