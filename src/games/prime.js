import readlineSync from 'readline-sync';
import getUserName from './games';
import generateRandomNumber from '../utils';

const checkPrimeNumber = () => {
  const userName = getUserName();
  const returnRightAnser = (text) => {
    for (let count = 2; count < text; count += 1) {
      if (text % count === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber(100);
    console.log(`Question: ${randomNumber}`);
    let rightAnswer;

    if (randomNumber <= 1) {
      rightAnswer = 'no';
    } else if (randomNumber === 2) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = returnRightAnser(randomNumber);
    }

    const answer = readlineSync.question('Your answer: ');
    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default checkPrimeNumber;
