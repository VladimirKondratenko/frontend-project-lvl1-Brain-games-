#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '..';

const getArithmeticProgression = () => {
  const userName = getUserName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    let startNumberProgression = Math.floor(Math.random() * Math.floor(100));
    const numberChangeProgression = Math.floor(Math.random() * Math.floor(100));
    const resultArithmeticProgression = [];
    const rightAnswer = numberChangeProgression;

    for (let count = 1; count < 10; count += 1) {
      startNumberProgression += numberChangeProgression;
      resultArithmeticProgression.push(startNumberProgression);
      // console.log(`${startNumberProgression} start progression`);
      // console.log(`${numberChangeProgression} numberchangeprogression`);
      // console.log(resultArithmeticProgression + 'TEST');
    }
    console.log(`Question: ${resultArithmeticProgression}`);
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

getArithmeticProgression();
