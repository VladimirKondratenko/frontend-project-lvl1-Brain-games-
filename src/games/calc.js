import readlineSync from 'readline-sync';
import getUserName from './games';
import generateRandomNumber from '../utils';

const calculatorGame = () => {
  const userName = getUserName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const symbolsArr = ['+', '-', '*'];
    const randomNumberOne = generateRandomNumber(100);
    const randomNumberTwo = generateRandomNumber(100);
    const symbolIndex = generateRandomNumber(3);
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
    console.log(`Question: ${randomNumberOne} ${symbolsArr[symbolIndex]} ${randomNumberTwo}`);
    const answer = readlineSync.question('Your answer: ');
    if (rightAnswer === parseInt(answer, 10)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calculatorGame;
