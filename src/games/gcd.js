import generateRandomNumber from '../utils';
import engine from '../index';

const startGreatestCommonDivisorGame = () => {
  const gameName = 'brain-gcd';
  console.log('Find the greatest common divisor of given numbers.');
  const getQuestion = () => {
    const randomNumberOne = generateRandomNumber(100);
    const randomNumberTwo = generateRandomNumber(100);
    const gameQuestion = [randomNumberOne, randomNumberTwo];
    return gameQuestion;
  };

  const getRightAnswer = (question) => {
    const [randomNumberOne, randomNumberTwo] = question;
    let rightAnswer = 2;
    for (let count = randomNumberOne; count > 0; count -= 1) {
      if (randomNumberOne % count === 0 && randomNumberTwo % count === 0) {
        rightAnswer = count;
        break;
      } else {
        rightAnswer = 0;
      }
    }
    return rightAnswer;
  };

  engine(gameName, getQuestion, getRightAnswer);
};

export default startGreatestCommonDivisorGame;
