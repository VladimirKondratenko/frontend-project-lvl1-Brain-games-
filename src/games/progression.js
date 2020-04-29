import generateRandomNumber from '../utils';
import engine from '../index';

const startArithmeticProgression = () => {
  const gameName = 'brain-progression';
  console.log('What number is missing in the progression?');
  let rightAnswer = 0;
  const getQuestion = () => {
    let startNumberProgression = generateRandomNumber(100);
    const numberChangeProgression = generateRandomNumber(10);
    const indexProgression = generateRandomNumber(10);
    const resultArithmeticProgression = [];
    for (let count = 1; count < 10; count += 1) {
      startNumberProgression += numberChangeProgression;
      resultArithmeticProgression.push(startNumberProgression);
    }
    rightAnswer = resultArithmeticProgression[indexProgression];
    resultArithmeticProgression[indexProgression] = '..';
    const gameQuestion = [resultArithmeticProgression];
    return gameQuestion;
  };

  const getRightAnswer = () => {
    return rightAnswer;
  };
  engine(gameName, getQuestion, getRightAnswer);
};

export default startArithmeticProgression;
