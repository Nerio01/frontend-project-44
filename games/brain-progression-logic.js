import _ from 'lodash';

export const start_phrase_progression = 'What number is missing in the progression?';

const makeProgression = () => {
  const modifier = _.random(2, 10);
  const first_number = _.random(1, 50);
  const full_progression = _.range(first_number, 200, modifier);
  const sliced_progression = full_progression.slice(0, 10);

  return sliced_progression;
};

export const brain_progression = () => {
  const progression = makeProgression();
  const index_from_progression = _.random(progression.length - 1);
  const number_from_progression = progression[index_from_progression];
  const progression_for_player = [...progression];
  progression_for_player[index_from_progression] = '..';
  const delimited_string_from_progression = progression_for_player.join(' ');
  const question_progression = `${delimited_string_from_progression}`;

  return [question_progression, number_from_progression];
};
