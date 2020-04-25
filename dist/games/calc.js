#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _games = _interopRequireDefault(require("./games"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const calculatorGame = () => {
  const userName = (0, _games.default)();
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

var _default = calculatorGame;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9jYWxjLmpzIl0sIm5hbWVzIjpbImNhbGN1bGF0b3JHYW1lIiwidXNlck5hbWUiLCJjb25zb2xlIiwibG9nIiwiaSIsInN5bWJvbHNBcnIiLCJyYW5kb21OdW1iZXJPbmUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21OdW1iZXJUd28iLCJzeW1ib2xJbmRleCIsInJpZ2h0QW5zd2VyIiwiYW5zd2VyIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsTUFBTTtBQUMzQixRQUFNQyxRQUFRLEdBQUcscUJBQWpCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVDQUFaOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxJQUFJLENBQTVCLEVBQStCO0FBQzdCLFVBQU1DLFVBQVUsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFuQjtBQUNBLFVBQU1DLGVBQWUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVcsR0FBWCxDQUEzQixDQUF4QjtBQUNBLFVBQU1FLGVBQWUsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVcsR0FBWCxDQUEzQixDQUF4QjtBQUNBLFVBQU1HLFdBQVcsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBWCxDQUEzQixDQUFwQjtBQUNBLFFBQUlJLFdBQUo7O0FBQ0EsWUFBUVAsVUFBVSxDQUFDTSxXQUFELENBQWxCO0FBQ0UsV0FBSyxHQUFMO0FBQ0VDLFFBQUFBLFdBQVcsR0FBR04sZUFBZSxHQUFHSSxlQUFoQztBQUNBOztBQUNGLFdBQUssR0FBTDtBQUNFRSxRQUFBQSxXQUFXLEdBQUdOLGVBQWUsR0FBR0ksZUFBaEM7QUFDQTs7QUFDRixXQUFLLEdBQUw7QUFDRUUsUUFBQUEsV0FBVyxHQUFHTixlQUFlLEdBQUdJLGVBQWhDO0FBQ0E7O0FBQ0Y7QUFDRTtBQVhKOztBQWFBUixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxhQUFZRyxlQUFnQixJQUFHRCxVQUFVLENBQUNNLFdBQUQsQ0FBYyxJQUFHRCxlQUFnQixFQUF2Rjs7QUFDQSxVQUFNRyxNQUFNLEdBQUdDLHNCQUFhQyxRQUFiLENBQXNCLGVBQXRCLENBQWY7O0FBQ0EsUUFBSUgsV0FBVyxLQUFLSSxRQUFRLENBQUNILE1BQUQsRUFBUyxFQUFULENBQTVCLEVBQTBDO0FBQ3hDWCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLElBQUdVLE1BQU8sNkNBQTRDRCxXQUFZLElBQS9FO0FBQ0FWLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQkYsUUFBUyxHQUF6QztBQUNBO0FBQ0Q7QUFDRjs7QUFDREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CRixRQUFTLEdBQXpDO0FBQ0QsQ0FqQ0Q7O2VBbUNlRCxjIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCBnZXRVc2VyTmFtZSBmcm9tICcuL2dhbWVzJztcblxuY29uc3QgY2FsY3VsYXRvckdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gZ2V0VXNlck5hbWUoKTtcbiAgY29uc29sZS5sb2coJ1doYXQgaXMgdGhlIHJlc3VsdCBvZiB0aGUgZXhwcmVzc2lvbj8nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICBjb25zdCBzeW1ib2xzQXJyID0gWycrJywgJy0nLCAnKiddO1xuICAgIGNvbnN0IHJhbmRvbU51bWJlck9uZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMTAwKSk7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyVHdvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigxMDApKTtcbiAgICBjb25zdCBzeW1ib2xJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMykpO1xuICAgIGxldCByaWdodEFuc3dlcjtcbiAgICBzd2l0Y2ggKHN5bWJvbHNBcnJbc3ltYm9sSW5kZXhdKSB7XG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgcmlnaHRBbnN3ZXIgPSByYW5kb21OdW1iZXJPbmUgKyByYW5kb21OdW1iZXJUd287XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIHJpZ2h0QW5zd2VyID0gcmFuZG9tTnVtYmVyT25lIC0gcmFuZG9tTnVtYmVyVHdvO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICByaWdodEFuc3dlciA9IHJhbmRvbU51bWJlck9uZSAqIHJhbmRvbU51bWJlclR3bztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke3JhbmRvbU51bWJlck9uZX0gJHtzeW1ib2xzQXJyW3N5bWJvbEluZGV4XX0gJHtyYW5kb21OdW1iZXJUd299YCk7XG4gICAgY29uc3QgYW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG4gICAgaWYgKHJpZ2h0QW5zd2VyID09PSBwYXJzZUludChhbnN3ZXIsIDEwKSkge1xuICAgICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBcIiR7YW5zd2VyfVwiIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzIFwiJHtyaWdodEFuc3dlcn1cIi5gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBMZXQncyB0cnkgYWdhaW4sICR7dXNlck5hbWV9IWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke3VzZXJOYW1lfSFgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0b3JHYW1lO1xuIl19