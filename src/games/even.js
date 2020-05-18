import generateRandomNumber from '../utils';
import starteEngine from '../index';

const isEven = (number) => (number % 2 === 0);

const gameTitle = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const question = generateRandomNumber(1, 1000);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [String(question), rightAnswer];
};

const startCheckEvenNumber = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startCheckEvenNumber;
