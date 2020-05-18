import generateRandomNumber from '../utils';
import starteEngine from '../index';

const gameTitle = 'What number is missing in the progression?';

const createProgression = (startMember, difference, lengthProgression) => {
  const resultProgression = [];
  for (let count = 1; count <= lengthProgression; count += 1) {
    startMember += difference;
    resultProgression.push(startMember);
  }
  return resultProgression;
};

const getRoundData = () => {
  let rightAnswer = 0;
  const startMember = generateRandomNumber(1, 100);
  const difference = generateRandomNumber(1, 10);
  const lengthProgression = 10;
  const resultProgression = createProgression(startMember, difference, lengthProgression);
  const hiddenMemberIndex = generateRandomNumber(0, resultProgression.length - 1);
  rightAnswer = resultProgression[hiddenMemberIndex];
  resultProgression[hiddenMemberIndex] = '..';
  return [resultProgression.join(' '), String(rightAnswer)];
};

const startProgression = () => {
  starteEngine(gameTitle, getRoundData);
};

export default startProgression;
