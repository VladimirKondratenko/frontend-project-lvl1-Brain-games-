import readlineSync from 'readline-sync';
import getUserName from './games';
import generateRandomNumber from '../utils';

const startArithmeticProgression = () => {
  const userName = getUserName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    let startNumberProgression = generateRandomNumber(100);
    const numberChangeProgression = generateRandomNumber(100);
    const indexProgression = generateRandomNumber(10);
    const resultArithmeticProgression = [];
    let rightAnswer = 0;

    for (let count = 1; count < 10; count += 1) {
      startNumberProgression += numberChangeProgression;
      resultArithmeticProgression.push(startNumberProgression);
    }

    rightAnswer = resultArithmeticProgression[indexProgression];
    resultArithmeticProgression[indexProgression] = '..';

    console.log(`Question: ${resultArithmeticProgression.join(' ')}`);
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

export default startArithmeticProgression;
