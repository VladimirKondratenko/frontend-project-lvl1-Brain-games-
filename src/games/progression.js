import generateRandomNumber from '../utils';
import engine from '../index';

const startArithmeticProgression = () => {
  const gameTitle = 'What number is missing in the progression?';
  let rightAnswer = 0;
  const getGameRound = () => {
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
    return [resultArithmeticProgression, rightAnswer];
  };
  engine(gameTitle, getGameRound);
};

export default startArithmeticProgression;
