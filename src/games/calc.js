import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'What is the result of the expression?';
const symbols = ['+', '-', '*'];

const calculate = (mathOperator, numberOne, numberTwo) => {
  switch (mathOperator) {
    case '+':
      console.log('throw Error();', Error());
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      throw Error();
  }
};

const getRoundData = () => {
  const numberOne = generateRandomNumber(1, 100);
  const numberTwo = generateRandomNumber(1, 100);
  const symbolIndex = generateRandomNumber(0, symbols.length - 1);
  const question = `${numberOne} ${symbols[symbolIndex]} ${numberTwo}`;
  const rightAnswer = calculate(symbols[symbolIndex], numberOne, numberTwo);
  return [question, String(rightAnswer)];
};

const startCalculatorGame = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startCalculatorGame;
