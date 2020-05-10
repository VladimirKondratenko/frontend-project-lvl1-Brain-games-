import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const getRoundData = () => {
  const randomNumberOne = generateRandomNumber(1, 100);
  const randomNumberTwo = generateRandomNumber(1, 100);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const getGCD = (numOne, numTwo) => {
    let x = numOne;
    let y = numTwo;
    while (y !== 0) y = x % (x = y);
    return x;
  };

  const rightAnswer = getGCD(randomNumberOne, randomNumberTwo);
  console.log('rightAnswer', typeof rightAnswer);
  return [question, String(rightAnswer)];
};

const startGcdGame = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startGcdGame;
