import generateRandomNumber from '../utils';
import engine from '../index';

const startCheckEvenNumber = () => {
  const gameTitle = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getGameRound = () => {
    const randomNumber = generateRandomNumber(1000);
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return [randomNumber, rightAnswer];
  };
  engine(gameTitle, getGameRound);
};

export default startCheckEvenNumber;
