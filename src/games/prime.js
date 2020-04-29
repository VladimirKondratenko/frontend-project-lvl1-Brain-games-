import generateRandomNumber from '../utils';
import engine from '../index';

const startCheckPrimeNumber = () => {
  const gameName = 'brain-prime';
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const getQuestion = () => {
    const randomNumber = generateRandomNumber(100);
    const gameQuestion = [randomNumber];
    return gameQuestion;
  };
  const getRightAnswer = (question) => {
    const [randomNumber] = question;
    for (let count = 2; count < randomNumber; count += 1) {
      if (randomNumber % count === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  engine(gameName, getQuestion, getRightAnswer);
};

export default startCheckPrimeNumber;
