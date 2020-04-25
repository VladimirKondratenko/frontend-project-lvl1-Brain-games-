#!/usr/bin/env node
"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const checkEvenNumber = () => {
  const userName = (0, _.default)();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * Math.floor(1000));
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);

    const answer = _readlineSync.default.question('Your answer: ');

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

checkEvenNumber();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2FtZXMvYnJhaW4tZXZlbi5qcyJdLCJuYW1lcyI6WyJjaGVja0V2ZW5OdW1iZXIiLCJ1c2VyTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmlnaHRBbnN3ZXIiLCJhbnN3ZXIiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLE1BQU07QUFDNUIsUUFBTUMsUUFBUSxHQUFHLGdCQUFqQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0REFBWjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsSUFBSSxDQUE1QixFQUErQjtBQUM3QixVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JGLElBQUksQ0FBQ0MsS0FBTCxDQUFXLElBQVgsQ0FBM0IsQ0FBckI7QUFDQSxVQUFNRSxXQUFXLEdBQUdKLFlBQVksR0FBRyxDQUFmLEtBQXFCLENBQXJCLEdBQXlCLEtBQXpCLEdBQWlDLElBQXJEO0FBQ0FILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLGFBQVlFLFlBQWEsRUFBdEM7O0FBQ0EsVUFBTUssTUFBTSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQixlQUF0QixDQUFmOztBQUNBLFFBQUlILFdBQVcsS0FBS0MsTUFBcEIsRUFBNEI7QUFDMUJSLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDRCxLQUZELE1BRU87QUFDTEQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR08sTUFBTyw2Q0FBNENELFdBQVksSUFBL0U7QUFDQVAsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CRixRQUFTLEdBQXpDO0FBQ0E7QUFDRDtBQUNGOztBQUNEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJGLFFBQVMsR0FBekM7QUFDRCxDQWpCRDs7QUFtQkFELGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuaW1wb3J0IGdldFVzZXJOYW1lIGZyb20gJy4uJztcblxuY29uc3QgY2hlY2tFdmVuTnVtYmVyID0gKCkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IGdldFVzZXJOYW1lKCk7XG4gIGNvbnNvbGUubG9nKCdBbnN3ZXIgXCJ5ZXNcIiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4sIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMTAwMCkpO1xuICAgIGNvbnN0IHJpZ2h0QW5zd2VyID0gcmFuZG9tTnVtYmVyICUgMiA9PT0gMCA/ICd5ZXMnIDogJ25vJztcbiAgICBjb25zb2xlLmxvZyhgUXVlc3Rpb246ICR7cmFuZG9tTnVtYmVyfWApO1xuICAgIGNvbnN0IGFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6ICcpO1xuICAgIGlmIChyaWdodEFuc3dlciA9PT0gYW5zd2VyKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYFwiJHthbnN3ZXJ9XCIgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgXCIke3JpZ2h0QW5zd2VyfVwiLmApO1xuICAgICAgY29uc29sZS5sb2coYExldCdzIHRyeSBhZ2FpbiwgJHt1c2VyTmFtZX0hYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7dXNlck5hbWV9IWApO1xufTtcblxuY2hlY2tFdmVuTnVtYmVyKCk7XG4iXX0=