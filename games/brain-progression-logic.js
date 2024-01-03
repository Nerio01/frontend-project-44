import _ from 'lodash';
import random from '../src/utilities.js';

const makeProgression = () => {
  const modifier = random(2, 10);
  const firstNumber = random(1, 50);
  const fullProgression = _.range(firstNumber, 200, modifier);
  const slicedProgression = fullProgression.slice(0, 10);
  return slicedProgression;
};

export default () => {
  const startPhraseProgression = 'What number is missing in the progression?';
  const progression = makeProgression();
  const indexFromProgression = random((progression.length - 1), (progression.length - 1));
  const numberFromProgression = progression[indexFromProgression];
  const progressionForPlayer = [...progression];
  progressionForPlayer[indexFromProgression] = '..';
  const delimitedStringFromProgression = progressionForPlayer.join(' ');
  const questionProgression = `${delimitedStringFromProgression}`;

  return [startPhraseProgression, questionProgression, String(numberFromProgression)];
};
