import generateRandomNumber from '../utils';
import engine from '../index';

const startCheckPrimeNumber = () => {
  const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getGameRound = () => {
    const randomNumber = generateRandomNumber(100);
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
  engine(gameTitle, getGameRound);
};

export default startCheckPrimeNumber;
