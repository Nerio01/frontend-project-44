export default (min = 0, max = 100) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(minValue + Math.random() * (maxValue - minValue + 1));
};
