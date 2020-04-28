import generateRandomNumber from '../utils';
import engine from '../index';

const startArithmeticProgression = () => {
  const gameName = 'brain-progression';
  console.log('What number is missing in the progression?');
  const getQuestion = () => {
    let startNumberProgression = generateRandomNumber(100);
    const numberChangeProgression = generateRandomNumber(100);
    const indexProgression = generateRandomNumber(10);
    const resultArithmeticProgression = [];
    let rightAnswer = 0;
    for (let count = 1; count < 10; count += 1) {
      startNumberProgression += numberChangeProgression;
      resultArithmeticProgression.push(startNumberProgression);
    }
    rightAnswer = resultArithmeticProgression[indexProgression];
    resultArithmeticProgression[indexProgression] = '..';
    const gameQuestion = [resultArithmeticProgression, indexProgression];
    return gameQuestion;
  };

  const getRightAnswer = (question) => {
    let rightAnswer = 0;
    const [resultArithmeticProgression, indexProgression] = question;
    rightAnswer = resultArithmeticProgression[indexProgression];
    return rightAnswer;
  };
  engine(gameName, getQuestion, getRightAnswer);
};

export default startArithmeticProgression;
