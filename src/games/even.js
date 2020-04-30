import generateRandomNumber from '../utils';
import engine from '../index';

const startCheckEvenNumber = () => {
  const gameName = 'brain-even';
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getGameRound = () => {
    const randomNumber = generateRandomNumber(1000);
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return [randomNumber, rightAnswer];
  };
  engine(gameName, getGameRound);
};

export default startCheckEvenNumber;
