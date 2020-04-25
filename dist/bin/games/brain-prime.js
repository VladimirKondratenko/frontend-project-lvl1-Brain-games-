#!/usr/bin/env node
"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const checkPrimeNumber = () => {
  const userName = (0, _.default)();

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

checkPrimeNumber();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2FtZXMvYnJhaW4tcHJpbWUuanMiXSwibmFtZXMiOlsiY2hlY2tQcmltZU51bWJlciIsInVzZXJOYW1lIiwicmV0dXJuUmlnaHRBbnNlciIsInRleHQiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJpIiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmlnaHRBbnN3ZXIiLCJhbnN3ZXIiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUcsTUFBTTtBQUM3QixRQUFNQyxRQUFRLEdBQUcsZ0JBQWpCOztBQUNBLFFBQU1DLGdCQUFnQixHQUFJQyxJQUFELElBQVU7QUFDakMsU0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR0QsSUFBNUIsRUFBa0NDLEtBQUssSUFBSSxDQUEzQyxFQUE4QztBQUM1QyxVQUFJRCxJQUFJLEdBQUdDLEtBQVAsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsZUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQVBEOztBQVFBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwrREFBWjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsSUFBSSxDQUE1QixFQUErQjtBQUM3QixVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JGLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEdBQVgsQ0FBM0IsQ0FBckI7QUFDQUwsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWUUsWUFBYSxFQUF0QztBQUNBLFFBQUlJLFdBQUo7O0FBRUEsUUFBSUosWUFBWSxJQUFJLENBQXBCLEVBQXVCO0FBQ3JCSSxNQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNELEtBRkQsTUFFTyxJQUFJSixZQUFZLEtBQUssQ0FBckIsRUFBd0I7QUFDN0JJLE1BQUFBLFdBQVcsR0FBRyxLQUFkO0FBQ0QsS0FGTSxNQUVBO0FBQ0xBLE1BQUFBLFdBQVcsR0FBR1YsZ0JBQWdCLENBQUNNLFlBQUQsQ0FBOUI7QUFDRDs7QUFFRCxVQUFNSyxNQUFNLEdBQUdDLHNCQUFhQyxRQUFiLENBQXNCLGVBQXRCLENBQWY7O0FBQ0EsUUFBSUgsV0FBVyxLQUFLQyxNQUFwQixFQUE0QjtBQUMxQlIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNELEtBRkQsTUFFTztBQUNMRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxJQUFHTyxNQUFPLDZDQUE0Q0QsV0FBWSxJQUEvRTtBQUNBUCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJMLFFBQVMsR0FBekM7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0RJLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQkwsUUFBUyxHQUF6QztBQUNELENBbENEOztBQW9DQUQsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCBnZXRVc2VyTmFtZSBmcm9tICcuLic7XG5cbmNvbnN0IGNoZWNrUHJpbWVOdW1iZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gZ2V0VXNlck5hbWUoKTtcbiAgY29uc3QgcmV0dXJuUmlnaHRBbnNlciA9ICh0ZXh0KSA9PiB7XG4gICAgZm9yIChsZXQgY291bnQgPSAyOyBjb3VudCA8IHRleHQ7IGNvdW50ICs9IDEpIHtcbiAgICAgIGlmICh0ZXh0ICUgY291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICdubyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAneWVzJztcbiAgfTtcbiAgY29uc29sZS5sb2coJ0Fuc3dlciBcInllc1wiIGlmIGdpdmVuIG51bWJlciBpcyBwcmltZS4gT3RoZXJ3aXNlIGFuc3dlciBcIm5vXCIuJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigxMDApKTtcbiAgICBjb25zb2xlLmxvZyhgUXVlc3Rpb246ICR7cmFuZG9tTnVtYmVyfWApO1xuICAgIGxldCByaWdodEFuc3dlcjtcblxuICAgIGlmIChyYW5kb21OdW1iZXIgPD0gMSkge1xuICAgICAgcmlnaHRBbnN3ZXIgPSAnbm8nO1xuICAgIH0gZWxzZSBpZiAocmFuZG9tTnVtYmVyID09PSAyKSB7XG4gICAgICByaWdodEFuc3dlciA9ICd5ZXMnO1xuICAgIH0gZWxzZSB7XG4gICAgICByaWdodEFuc3dlciA9IHJldHVyblJpZ2h0QW5zZXIocmFuZG9tTnVtYmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOiAnKTtcbiAgICBpZiAocmlnaHRBbnN3ZXIgPT09IGFuc3dlcikge1xuICAgICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBcIiR7YW5zd2VyfVwiIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzIFwiJHtyaWdodEFuc3dlcn1cIi5gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBMZXQncyB0cnkgYWdhaW4sICR7dXNlck5hbWV9IWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke3VzZXJOYW1lfSFgKTtcbn07XG5cbmNoZWNrUHJpbWVOdW1iZXIoKTtcbiJdfQ==