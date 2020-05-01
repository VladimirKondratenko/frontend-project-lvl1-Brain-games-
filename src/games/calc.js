import generateRandomNumber from '../utils';
import engine from '../index';

const startCalculatorGame = () => {
  const gameTitle = 'What is the result of the expression?';
  const symbolsArr = ['+', '-', '*'];

  const getGameRound = () => {
    const randomNumberOne = generateRandomNumber(100);
    const randomNumberTwo = generateRandomNumber(100);
    const symbolIndex = generateRandomNumber(3);
    const gameQuestion = [randomNumberOne, symbolsArr[symbolIndex], randomNumberTwo].join(' ');
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
    return [gameQuestion, rightAnswer];
  };
  engine(gameTitle, getGameRound);
};

export default startCalculatorGame;
