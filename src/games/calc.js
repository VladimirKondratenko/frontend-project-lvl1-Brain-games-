import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'What is the result of the expression?';
const mathOperators = ['+', '-', '*'];

const calculate = (operator, numberOne, numberTwo) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      throw Error(`${operator} not found`);
  }
};

const getRoundData = () => {
  const numberOne = generateRandomNumber(1, 100);
  const numberTwo = generateRandomNumber(1, 100);
  const symbolIndex = generateRandomNumber(0, mathOperators.length - 1);
  const question = `${numberOne} ${mathOperators[symbolIndex]} ${numberTwo}`;
  const rightAnswer = calculate(mathOperators[symbolIndex], numberOne, numberTwo);
  return [question, String(rightAnswer)];
};

const startCalculatorGame = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startCalculatorGame;
