import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'What is the result of the expression?';
const symbols = ['+', '-', '*'];

const getRoundData = () => {
  const numberOne = generateRandomNumber(1, 100);
  const numberTwo = generateRandomNumber(1, 100);
  const symbolIndex = generateRandomNumber(0, 2);
  const question = `${numberOne} ${symbols[symbolIndex]} ${numberTwo}`;
  let rightAnswer;
  switch (symbols[symbolIndex]) {
    case '+':
      rightAnswer = numberOne + numberTwo;
      break;
    case '-':
      rightAnswer = numberOne - numberTwo;
      break;
    case '*':
      rightAnswer = numberOne * numberTwo;
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
