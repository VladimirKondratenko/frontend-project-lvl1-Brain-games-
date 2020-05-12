import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const getGCD = (numOne, numTwo) => {
  let x = numOne;
  let y = numTwo;
  while (y !== 0) y = x % (x = y);
  return x;
};

const getRoundData = () => {
  const numberOne = generateRandomNumber(1, 100);
  const numberTwo = generateRandomNumber(1, 100);
  const question = `${numberOne} ${numberTwo}`;
  const rightAnswer = getGCD(numberOne, numberTwo);
  return [question, String(rightAnswer)];
};

const startGcdGame = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startGcdGame;
