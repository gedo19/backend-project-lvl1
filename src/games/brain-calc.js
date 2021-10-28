import getRandomNum from '../reusable/getRandomNum.js';
import playGame from '../index.js';

export default () => {
  const rule = 'What is the result of the expression?';

  const genQuestionsAndAnswers = () => {
    const questionsAndAnswers = [];
    const questionsCount = 3;

    for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
      const questionAndAnswer = [];
      const num1 = getRandomNum();
      const num2 = getRandomNum();
      const question = `${num1} + ${num2}`;
      const sum = num1 + num2;
      const answer = sum;
      questionAndAnswer.push(question);
      questionAndAnswer.push(answer);
      questionsAndAnswers.push(questionAndAnswer);
    }

    return questionsAndAnswers;
  };

  playGame(rule, genQuestionsAndAnswers());
};
