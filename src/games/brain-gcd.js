import playGame from '../index.js';
import getRandomNum from '../reusable/getRandomNum.js';
import findGCD from '../reusable/findGCD.js';

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  const getQuestionsAndAnswers = () => {
    const questionsAndAnswers = [];
    const questionsCount = 3;

    for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
      const num1 = getRandomNum(1, 20);
      const num2 = getRandomNum(1, 20);
      const question = `${num1} ${num2}`;
      const gcdOfNum1nNum2 = findGCD(num1, num2);
      const answer = gcdOfNum1nNum2;
      questionsAndAnswers.push([question, answer]);
    }

    return questionsAndAnswers;
  };

  playGame(rule, getQuestionsAndAnswers());
};
