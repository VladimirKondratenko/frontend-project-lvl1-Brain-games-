import generateRandomNumber from '../utils';
import engine from '../index';


export default startCheckPrimeNumber;

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
    let rightAnswer;
    const returnRightAnser = (text) => {
      for (let count = 2; count < text; count += 1) {
        if (text % count === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    if (randomNumber <= 1) {
      rightAnswer = 'no';
    } else if (randomNumber === 2) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = returnRightAnser(randomNumber);
    };
  return rightAnswer;
  engine(gameName, getQuestion, getRightAnswer);
  };


