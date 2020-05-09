import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'What is the result of the expression?';
const symbolsArr = ['+', '-', '*'];

const getRoundData = () => {
  const randomNumberOne = generateRandomNumber(1, 100);
  const randomNumberTwo = generateRandomNumber(1, 100);
  const symbolIndex = generateRandomNumber(0, 2);
  const question = [randomNumberOne, symbolsArr[symbolIndex], randomNumberTwo].join(' ');
  let rightAnswer;
  switch (symbolsArr[symbolIndex]) {
    case '+':
      rightAnswer = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      rightAnswer = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      rightAnswer = randomNumberOne * randomNumberTwo;
      break;
    default:
      break;
  }
  return [question, rightAnswer];
};

const startCalculatorGame = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startCalculatorGame;
