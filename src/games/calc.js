import generateRandomNumber from '../utils';
import engine from '../index';

const startCalculatorGame = () => {
  const gameName = 'brain-calc';
  console.log('What is the result of the expression?');
  const symbolsArr = ['+', '-', '*'];
  const randomNumberOne = generateRandomNumber(100);
  const randomNumberTwo = generateRandomNumber(100);
  const symbolIndex = generateRandomNumber(3);
  const gameQuestion = (`Question: ${randomNumberOne} ${symbolsArr[symbolIndex]} ${randomNumberTwo}`);
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
  engine(gameName, gameQuestion, rightAnswer);
};

export default startCalculatorGame;
