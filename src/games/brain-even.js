import getRandomNum from '../reusable/getRandomNum.js';
import playGame from '../index.js';

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const genQuestionsAndAnswers = () => {
    const questionsAndAnswers = [];
    const questionsCount = 3;

    for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
      const num = getRandomNum(1, 30);
      const question = num;
      const isNumEven = num % 2 === 0;
      const answer = isNumEven ? 'yes' : 'no';
      questionsAndAnswers.push([question, answer]);
    }

    return questionsAndAnswers;
  };

  playGame(rule, genQuestionsAndAnswers());
};
