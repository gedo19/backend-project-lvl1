export default (start, step, length) => {
  const progression = [];
  let currentStep = start;

  do {
    progression.push(currentStep);
    currentStep += step;
  } while (progression.length !== length);

  return progression;
};
