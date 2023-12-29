import _ from 'lodash';

const makeProgression = () => {
  const modifier = _.random(2, 10);
  const firstNumber = _.random(1, 50);
  const fullProgression = _.range(firstNumber, 200, modifier);
  const slicedProgression = fullProgression.slice(0, 10);

  return slicedProgression;
};

export default () => {
  const startPhraseProgression = 'What number is missing in the progression?';
  const progression = makeProgression();
  const indexFromProgression = _.random(progression.length - 1);
  const numberFromProgression = progression[indexFromProgression];
  const progressionForPlayer = [...progression];
  progressionForPlayer[indexFromProgression] = '..';
  const delimitedStringFromProgression = progressionForPlayer.join(' ');
  const questionProgression = `${delimitedStringFromProgression}`;

  return [startPhraseProgression, questionProgression, String(numberFromProgression)];
};
