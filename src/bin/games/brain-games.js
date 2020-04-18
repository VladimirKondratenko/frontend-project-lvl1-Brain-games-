#!/usr/bin/env node
import getUserName from '../../index';
import calculatorGame from "../bin/games/brain-calc";


const chooseBrainGame = (choosedGameName) => {
  getUserName();
  switch (choosedGameName) {
    case "brain-calc":
      calculatorGame();
      break;
    case "brain-even":
      checkEvenNumber();
      break;
    case "brain-gcd":
      greatestCommonDivisorGame();
      break;
    case "brain-prime":
      checkPrimeNumber();
      break;
    case "brain-progression":
      getArithmeticProgression();
      break;
    default:
      console.log("You can try again choose the game");
  }
};

chooseBrainGame();
