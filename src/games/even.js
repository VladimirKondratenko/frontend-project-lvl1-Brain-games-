import generateRandomNumber from '../utils';
import engine from '../index';

const startCheckEvenNumber = () => {
  const gameName = 'brain-even';
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getQuestion = () => {
    const randomNumber = generateRandomNumber(1000);
    const gameQuestion = [randomNumber];
    return gameQuestion;
  };

  const getRightAnswer = (question) => {
    const [randomNumber] = question;
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return rightAnswer;
  };

  engine(gameName, getQuestion, getRightAnswer);
};

export default startCheckEvenNumber;
