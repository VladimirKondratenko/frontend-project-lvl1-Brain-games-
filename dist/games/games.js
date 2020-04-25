#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUserName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${userName}`);
  return userName;
};

var _default = getUserName;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9nYW1lcy5qcyJdLCJuYW1lcyI6WyJnZXRVc2VyTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyTmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFDQTs7OztBQUVBLE1BQU1BLFdBQVcsR0FBRyxNQUFNO0FBQ3hCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjs7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHNCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUFqQjs7QUFDQUosRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0MsUUFBUyxFQUEvQjtBQUNBLFNBQU9BLFFBQVA7QUFDRCxDQUxEOztlQU9lSCxXIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuY29uc3QgZ2V0VXNlck5hbWUgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyEnKTtcbiAgY29uc3QgdXNlck5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYEhlbGxvLCAke3VzZXJOYW1lfWApO1xuICByZXR1cm4gdXNlck5hbWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRVc2VyTmFtZTtcbiJdfQ==