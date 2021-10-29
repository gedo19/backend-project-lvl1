import playGame from '../index.js';
import getRandomNum from '../reusable/getRandomNum.js';
import isPrime from '../reusable/isPrime.js';

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const genQuestionsAndAnsers = () => {
    const questionsAndAnsers = [];
    const questionsCount = 3;

    for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
      const num = getRandomNum(1, 30);
      const isNumPrime = isPrime(num);
      const question = num;
      const answer = isNumPrime ? 'yes' : 'no';
      questionsAndAnsers.push([question, answer]);
    }

    return questionsAndAnsers;
  };

  playGame(rule, genQuestionsAndAnsers());
};
