import getRandomNum from '../getRandomNum.js';
import { playGame, questionsCount } from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;

  const maxDelimiter = num / 2;

  for (let delimiter = 2; delimiter <= maxDelimiter; delimiter += 1) {
    if (num % delimiter === 0) return false;
  }

  return true;
};

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionsAndAnsers = [];

  for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
    const num = getRandomNum(1, 30);
    const isNumPrime = isPrime(num);
    const question = num;
    const answer = isNumPrime ? 'yes' : 'no';
    questionsAndAnsers.push([question, answer]);
  }

  playGame(rule, questionsAndAnsers);
};
