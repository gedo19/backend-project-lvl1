export default (num) => {
  if (num < 2) return false;

  const maxDelimiter = num / 2;

  for (let delimiter = 2; delimiter <= maxDelimiter; delimiter += 1) {
    if (num % delimiter === 0) return false;
  }

  return true;
};
