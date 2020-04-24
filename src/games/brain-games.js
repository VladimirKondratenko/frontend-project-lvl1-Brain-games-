#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

// const chooseBrainGame = (choosedGameName) => {
//   getUserName();
//   switch (choosedGameName) {
//     case "brain-calc":
//       calculatorGame();
//       break;
//     case "brain-even":
//       checkEvenNumber();
//       break;
//     case "brain-gcd":
//       greatestCommonDivisorGame();
//       break;
//     case "brain-prime":
//       checkPrimeNumber();
//       break;
//     case "brain-progression":
//       getArithmeticProgression();
//       break;
//     default:
//       console.log("You can try again choose the game");
//   }
// };

// chooseBrainGame();

export default getUserName;
