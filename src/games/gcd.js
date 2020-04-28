import readlineSync from 'readline-sync';
import getUserName from './games';
import generateRandomNumber from '../utils';

const greatestCommonDivisorGame = () => {
  const userName = getUserName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = generateRandomNumber(100);
    const randomNumberTwo = generateRandomNumber(100);
    let rightAnswer = 2;
    console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
    for (let count = randomNumberOne; count > 0; count -= 1) {
      if (randomNumberOne % count === 0 && randomNumberTwo % count === 0) {
        rightAnswer = count;
        break;
      } else {
        rightAnswer = 0;
      }
    }
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

export default greatestCommonDivisorGame;
