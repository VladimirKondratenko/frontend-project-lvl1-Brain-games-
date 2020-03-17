#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '..';

const greatestCommonDivisorGame = () => {
  const userName = getUserName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = Math.floor(Math.random() * Math.floor(100));
    const randomNumberTwo = Math.floor(Math.random() * Math.floor(10));
    let rightAnswer;
    console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
    for (let count = randomNumberOne; count > 0; count -= 1) {
      if (randomNumberOne % count === 0 && randomNumberTwo % count === 0) {
        rightAnswer = count;
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

greatestCommonDivisorGame();
