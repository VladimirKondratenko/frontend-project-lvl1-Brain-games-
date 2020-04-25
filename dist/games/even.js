#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _brainGames = _interopRequireDefault(require("../bin/brain-games"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const checkEvenNumber = () => {
  const userName = (0, _brainGames.default)();
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

var _default = checkEvenNumber;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9ldmVuLmpzIl0sIm5hbWVzIjpbImNoZWNrRXZlbk51bWJlciIsInVzZXJOYW1lIiwiY29uc29sZSIsImxvZyIsImkiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyaWdodEFuc3dlciIsImFuc3dlciIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLGVBQWUsR0FBRyxNQUFNO0FBQzVCLFFBQU1DLFFBQVEsR0FBRywwQkFBakI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNERBQVo7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLElBQUksQ0FBNUIsRUFBK0I7QUFDN0IsVUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCRixJQUFJLENBQUNDLEtBQUwsQ0FBVyxJQUFYLENBQTNCLENBQXJCO0FBQ0EsVUFBTUUsV0FBVyxHQUFHSixZQUFZLEdBQUcsQ0FBZixLQUFxQixDQUFyQixHQUF5QixLQUF6QixHQUFpQyxJQUFyRDtBQUNBSCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxhQUFZRSxZQUFhLEVBQXRDOztBQUNBLFVBQU1LLE1BQU0sR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBZjs7QUFDQSxRQUFJSCxXQUFXLEtBQUtDLE1BQXBCLEVBQTRCO0FBQzFCUixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLElBQUdPLE1BQU8sNkNBQTRDRCxXQUFZLElBQS9FO0FBQ0FQLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQkYsUUFBUyxHQUF6QztBQUNBO0FBQ0Q7QUFDRjs7QUFDREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CRixRQUFTLEdBQXpDO0FBQ0QsQ0FqQkQ7O2VBbUJlRCxlIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCBnZXRVc2VyTmFtZSBmcm9tICcuLi9iaW4vYnJhaW4tZ2FtZXMnO1xuXG5jb25zdCBjaGVja0V2ZW5OdW1iZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gZ2V0VXNlck5hbWUoKTtcbiAgY29uc29sZS5sb2coJ0Fuc3dlciBcInllc1wiIGlmIHRoZSBudW1iZXIgaXMgZXZlbiwgb3RoZXJ3aXNlIGFuc3dlciBcIm5vXCIuJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigxMDAwKSk7XG4gICAgY29uc3QgcmlnaHRBbnN3ZXIgPSByYW5kb21OdW1iZXIgJSAyID09PSAwID8gJ3llcycgOiAnbm8nO1xuICAgIGNvbnNvbGUubG9nKGBRdWVzdGlvbjogJHtyYW5kb21OdW1iZXJ9YCk7XG4gICAgY29uc3QgYW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG4gICAgaWYgKHJpZ2h0QW5zd2VyID09PSBhbnN3ZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgXCIke2Fuc3dlcn1cIiBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyBcIiR7cmlnaHRBbnN3ZXJ9XCIuYCk7XG4gICAgICBjb25zb2xlLmxvZyhgTGV0J3MgdHJ5IGFnYWluLCAke3VzZXJOYW1lfSFgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHt1c2VyTmFtZX0hYCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja0V2ZW5OdW1iZXI7XG4iXX0=