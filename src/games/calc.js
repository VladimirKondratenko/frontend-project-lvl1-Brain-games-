import generateRandomNumber from '../utils';
import engine from '../index';

const startCalculatorGame = () => {
  const gameName = 'brain-calc';
  console.log('What is the result of the expression?');
  const symbolsArr = ['+', '-', '*'];

  const getQuestion = () => {
    const randomNumberOne = generateRandomNumber(100);
    const randomNumberTwo = generateRandomNumber(100);
    const symbolIndex = generateRandomNumber(3);
    const gameQuestion = [randomNumberOne, symbolsArr[symbolIndex], randomNumberTwo];
    return gameQuestion;
  };

  const getRightAnswer = (question) => {
    const [randomNumberOne, symbol, randomNumberTwo] = question;
    let rightAnswer;
    switch (symbol) {
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
    return rightAnswer;
  };

  engine(gameName, getQuestion, getRightAnswer);
};

export default startCalculatorGame;
