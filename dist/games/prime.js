#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _brainGames = _interopRequireDefault(require("../bin/brain-games"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const checkPrimeNumber = () => {
  const userName = (0, _brainGames.default)();

  const returnRightAnser = text => {
    for (let count = 2; count < text; count += 1) {
      if (text % count === 0) {
        return 'no';
      }
    }

    return 'yes';
  };

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * Math.floor(100));
    console.log(`Question: ${randomNumber}`);
    let rightAnswer;

    if (randomNumber <= 1) {
      rightAnswer = 'no';
    } else if (randomNumber === 2) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = returnRightAnser(randomNumber);
    }

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

var _default = checkPrimeNumber;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9wcmltZS5qcyJdLCJuYW1lcyI6WyJjaGVja1ByaW1lTnVtYmVyIiwidXNlck5hbWUiLCJyZXR1cm5SaWdodEFuc2VyIiwidGV4dCIsImNvdW50IiwiY29uc29sZSIsImxvZyIsImkiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyaWdodEFuc3dlciIsImFuc3dlciIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLGdCQUFnQixHQUFHLE1BQU07QUFDN0IsUUFBTUMsUUFBUSxHQUFHLDBCQUFqQjs7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBSUMsSUFBRCxJQUFVO0FBQ2pDLFNBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdELElBQTVCLEVBQWtDQyxLQUFLLElBQUksQ0FBM0MsRUFBOEM7QUFDNUMsVUFBSUQsSUFBSSxHQUFHQyxLQUFQLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGVBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBTyxLQUFQO0FBQ0QsR0FQRDs7QUFRQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksK0RBQVo7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLElBQUksQ0FBNUIsRUFBK0I7QUFDN0IsVUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCRixJQUFJLENBQUNDLEtBQUwsQ0FBVyxHQUFYLENBQTNCLENBQXJCO0FBQ0FMLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLGFBQVlFLFlBQWEsRUFBdEM7QUFDQSxRQUFJSSxXQUFKOztBQUVBLFFBQUlKLFlBQVksSUFBSSxDQUFwQixFQUF1QjtBQUNyQkksTUFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDRCxLQUZELE1BRU8sSUFBSUosWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQzdCSSxNQUFBQSxXQUFXLEdBQUcsS0FBZDtBQUNELEtBRk0sTUFFQTtBQUNMQSxNQUFBQSxXQUFXLEdBQUdWLGdCQUFnQixDQUFDTSxZQUFELENBQTlCO0FBQ0Q7O0FBRUQsVUFBTUssTUFBTSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQixlQUF0QixDQUFmOztBQUNBLFFBQUlILFdBQVcsS0FBS0MsTUFBcEIsRUFBNEI7QUFDMUJSLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDRCxLQUZELE1BRU87QUFDTEQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR08sTUFBTyw2Q0FBNENELFdBQVksSUFBL0U7QUFDQVAsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CTCxRQUFTLEdBQXpDO0FBQ0E7QUFDRDtBQUNGOztBQUNESSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJMLFFBQVMsR0FBekM7QUFDRCxDQWxDRDs7ZUFvQ2VELGdCIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCBnZXRVc2VyTmFtZSBmcm9tICcuLi9iaW4vYnJhaW4tZ2FtZXMnO1xuXG5jb25zdCBjaGVja1ByaW1lTnVtYmVyID0gKCkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IGdldFVzZXJOYW1lKCk7XG4gIGNvbnN0IHJldHVyblJpZ2h0QW5zZXIgPSAodGV4dCkgPT4ge1xuICAgIGZvciAobGV0IGNvdW50ID0gMjsgY291bnQgPCB0ZXh0OyBjb3VudCArPSAxKSB7XG4gICAgICBpZiAodGV4dCAlIGNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnbm8nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ3llcyc7XG4gIH07XG4gIGNvbnNvbGUubG9nKCdBbnN3ZXIgXCJ5ZXNcIiBpZiBnaXZlbiBudW1iZXIgaXMgcHJpbWUuIE90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMTAwKSk7XG4gICAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke3JhbmRvbU51bWJlcn1gKTtcbiAgICBsZXQgcmlnaHRBbnN3ZXI7XG5cbiAgICBpZiAocmFuZG9tTnVtYmVyIDw9IDEpIHtcbiAgICAgIHJpZ2h0QW5zd2VyID0gJ25vJztcbiAgICB9IGVsc2UgaWYgKHJhbmRvbU51bWJlciA9PT0gMikge1xuICAgICAgcmlnaHRBbnN3ZXIgPSAneWVzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmlnaHRBbnN3ZXIgPSByZXR1cm5SaWdodEFuc2VyKHJhbmRvbU51bWJlcik7XG4gICAgfVxuXG4gICAgY29uc3QgYW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG4gICAgaWYgKHJpZ2h0QW5zd2VyID09PSBhbnN3ZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgXCIke2Fuc3dlcn1cIiBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyBcIiR7cmlnaHRBbnN3ZXJ9XCIuYCk7XG4gICAgICBjb25zb2xlLmxvZyhgTGV0J3MgdHJ5IGFnYWluLCAke3VzZXJOYW1lfSFgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHt1c2VyTmFtZX0hYCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja1ByaW1lTnVtYmVyO1xuIl19