import getRandomNum from '../getRandomNum.js';
import { playGame, questionsCount } from '../index.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questionsAndAnswers = [];

  for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
    const num = getRandomNum(1, 30);
    const question = num;
    const answer = isEven(num) ? 'yes' : 'no';
    questionsAndAnswers.push([question, answer]);
  }

  playGame(rule, questionsAndAnswers);
};
