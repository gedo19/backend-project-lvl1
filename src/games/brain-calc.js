import getRandomNum from '../reusable/getRandomNum.js';
import playGame from '../index.js';

export default () => {
  const rule = 'What is the result of the expression?';

  const genQuestionsAndAnswers = () => {
    const questionsAndAnswers = [];
    const operators = ['+', '-', '*'];
    const questionsCount = 3;

    for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
      const num1 = getRandomNum(1, 10);
      const num2 = getRandomNum(1, 10);
      const operator = operators[getRandomNum(0, 2)];
      const question = `${num1} ${operator} ${num2}`;
      let answer = 0;
      switch (operator) {
        case '+':
          answer = num1 + num2;
          break;
        case '-':
          answer = num1 - num2;
          break;
        case '*':
          answer = num1 * num2;
          break;
        default:
          break;
      }
      questionsAndAnswers.push([question, answer]);
    }

    return questionsAndAnswers;
  };

  playGame(rule, genQuestionsAndAnswers());
};
