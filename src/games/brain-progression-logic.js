import _ from 'lodash';
import random from '../utilities.js';
import runEngine from '../index.js';

const makeProgression = () => {
  const modifier = random(2, 10);
  const firstNumber = random(1, 50);
  const fullProgression = _.range(firstNumber, 200, modifier);
  const slicedProgression = fullProgression.slice(0, 10);
  return slicedProgression;
};

const generateRound = () => {
  const progression = makeProgression();
  const indexFromProgression = random((progression.length - 1), (progression.length - 1));
  const answer = String(progression[indexFromProgression]);
  const progressionForPlayer = [...progression];
  progressionForPlayer[indexFromProgression] = '..';
  const delimitedStringFromProgression = progressionForPlayer.join(' ');
  const question = `${delimitedStringFromProgression}`;

  return [question, answer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};
