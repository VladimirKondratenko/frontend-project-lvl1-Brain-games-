#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _brainGames = _interopRequireDefault(require("../bin/brain-games"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greatestCommonDivisorGame = () => {
  const userName = (0, _brainGames.default)();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = Math.floor(Math.random() * Math.floor(100));
    const randomNumberTwo = Math.floor(Math.random() * Math.floor(100));
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

    const answer = _readlineSync.default.question('Your answer: ');

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

var _default = greatestCommonDivisorGame;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9nY2QuanMiXSwibmFtZXMiOlsiZ3JlYXRlc3RDb21tb25EaXZpc29yR2FtZSIsInVzZXJOYW1lIiwiY29uc29sZSIsImxvZyIsImkiLCJyYW5kb21OdW1iZXJPbmUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21OdW1iZXJUd28iLCJyaWdodEFuc3dlciIsImNvdW50IiwiYW5zd2VyIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSx5QkFBeUIsR0FBRyxNQUFNO0FBQ3RDLFFBQU1DLFFBQVEsR0FBRywwQkFBakI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0RBQVo7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLElBQUksQ0FBNUIsRUFBK0I7QUFDN0IsVUFBTUMsZUFBZSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCRixJQUFJLENBQUNDLEtBQUwsQ0FBVyxHQUFYLENBQTNCLENBQXhCO0FBQ0EsVUFBTUUsZUFBZSxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCRixJQUFJLENBQUNDLEtBQUwsQ0FBVyxHQUFYLENBQTNCLENBQXhCO0FBQ0EsUUFBSUcsV0FBVyxHQUFHLENBQWxCO0FBQ0FSLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLGFBQVlFLGVBQWdCLElBQUdJLGVBQWdCLEVBQTVEOztBQUNBLFNBQUssSUFBSUUsS0FBSyxHQUFHTixlQUFqQixFQUFrQ00sS0FBSyxHQUFHLENBQTFDLEVBQTZDQSxLQUFLLElBQUksQ0FBdEQsRUFBeUQ7QUFDdkQsVUFBSU4sZUFBZSxHQUFHTSxLQUFsQixLQUE0QixDQUE1QixJQUFpQ0YsZUFBZSxHQUFHRSxLQUFsQixLQUE0QixDQUFqRSxFQUFvRTtBQUNsRUQsUUFBQUEsV0FBVyxHQUFHQyxLQUFkO0FBQ0E7QUFDRCxPQUhELE1BR087QUFDTEQsUUFBQUEsV0FBVyxHQUFHLENBQWQ7QUFDRDtBQUNGOztBQUNELFVBQU1FLE1BQU0sR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBZjs7QUFDQSxRQUFJSixXQUFXLEtBQUtLLFFBQVEsQ0FBQ0gsTUFBRCxFQUFTLEVBQVQsQ0FBNUIsRUFBMEM7QUFDeENWLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDRCxLQUZELE1BRU87QUFDTEQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR1MsTUFBTyw2Q0FBNENGLFdBQVksSUFBL0U7QUFDQVIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CRixRQUFTLEdBQXpDO0FBQ0E7QUFDRDtBQUNGOztBQUNEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJGLFFBQVMsR0FBekM7QUFDRCxDQTFCRDs7ZUE0QmVELHlCIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCBnZXRVc2VyTmFtZSBmcm9tICcuLi9iaW4vYnJhaW4tZ2FtZXMnO1xuXG5jb25zdCBncmVhdGVzdENvbW1vbkRpdmlzb3JHYW1lID0gKCkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IGdldFVzZXJOYW1lKCk7XG4gIGNvbnNvbGUubG9nKCdGaW5kIHRoZSBncmVhdGVzdCBjb21tb24gZGl2aXNvciBvZiBnaXZlbiBudW1iZXJzLicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJhbmRvbU51bWJlck9uZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMTAwKSk7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyVHdvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigxMDApKTtcbiAgICBsZXQgcmlnaHRBbnN3ZXIgPSAyO1xuICAgIGNvbnNvbGUubG9nKGBRdWVzdGlvbjogJHtyYW5kb21OdW1iZXJPbmV9ICR7cmFuZG9tTnVtYmVyVHdvfWApO1xuICAgIGZvciAobGV0IGNvdW50ID0gcmFuZG9tTnVtYmVyT25lOyBjb3VudCA+IDA7IGNvdW50IC09IDEpIHtcbiAgICAgIGlmIChyYW5kb21OdW1iZXJPbmUgJSBjb3VudCA9PT0gMCAmJiByYW5kb21OdW1iZXJUd28gJSBjb3VudCA9PT0gMCkge1xuICAgICAgICByaWdodEFuc3dlciA9IGNvdW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJpZ2h0QW5zd2VyID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG4gICAgaWYgKHJpZ2h0QW5zd2VyID09PSBwYXJzZUludChhbnN3ZXIsIDEwKSkge1xuICAgICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBcIiR7YW5zd2VyfVwiIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzIFwiJHtyaWdodEFuc3dlcn1cIi5gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBMZXQncyB0cnkgYWdhaW4sICR7dXNlck5hbWV9IWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke3VzZXJOYW1lfSFgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdyZWF0ZXN0Q29tbW9uRGl2aXNvckdhbWU7XG4iXX0=