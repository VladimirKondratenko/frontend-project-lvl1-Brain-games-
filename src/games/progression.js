import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'What number is missing in the progression?';

const lengthProgression = 10;

const createProgression = (startMember, difference, length) => {
  const progression = [];
  for (let index = 0; index < length; index += 1) {
    const current = startMember + index * difference;
    progression.push(current);
  }
  return progression;
};

const getRoundData = () => {
  const startMember = generateRandomNumber(1, 100);
  const difference = generateRandomNumber(1, 10);

  const progression = createProgression(startMember, difference, lengthProgression);
  const hiddenMemberIndex = generateRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[hiddenMemberIndex];
  progression[hiddenMemberIndex] = '..';
  return [progression.join(' '), String(rightAnswer)];
};

const startProgression = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startProgression;
