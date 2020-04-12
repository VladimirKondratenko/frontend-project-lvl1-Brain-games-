#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../index.js';

const calculatorGame = () => {
  const userName = getUserName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const symbolsArr = ['+', '-', '*'];
    const randomNumberOne = Math.floor(Math.random() * Math.floor(100));
    const randomNumberTwo = Math.floor(Math.random() * Math.floor(100));
    const symbolIndex = Math.floor(Math.random() * Math.floor(3));
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

calculatorGame();
