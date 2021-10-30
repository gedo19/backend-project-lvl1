import getRandomNum from '../getRandomNum.js';
import { playGame, questionsCount } from '../index.js';

const findGCD = (num1, num2) => {
  if (num2 === 0) return num1;
  return findGCD(num2, num1 % num2);
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  const getQuestionsAndAnswers = () => {
    const questionsAndAnswers = [];

    for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
      const num1 = getRandomNum(1, 20);
      const num2 = getRandomNum(1, 20);
      const question = `${num1} ${num2}`;
      const gcdOfNum1nNum2 = findGCD(num1, num2);
      const answer = gcdOfNum1nNum2;
      questionsAndAnswers.push([question, String(answer)]);
    }

    return questionsAndAnswers;
  };

  playGame(rule, getQuestionsAndAnswers());
};
