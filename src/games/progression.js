import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'What number is missing in the progression?';

const getRoundData = () => {
  let rightAnswer = 0;
  let startNumberProgression = generateRandomNumber(1, 100);
  const numberChangeProgression = generateRandomNumber(1, 10);
  const indexProgression = generateRandomNumber(0, 10);
  const resultArithmeticProgression = [];
  for (let count = 1; count < 10; count += 1) {
    startNumberProgression += numberChangeProgression;
    resultArithmeticProgression.push(startNumberProgression);
  }
  rightAnswer = resultArithmeticProgression[indexProgression];
  resultArithmeticProgression[indexProgression] = '..';

  return [resultArithmeticProgression.join(' '), rightAnswer];
};

const startArithmeticProgression = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startArithmeticProgression;
