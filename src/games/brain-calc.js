import getRandomNum from '../getRandomNum.js';
import { playGame, questionsCount } from '../index.js';

const calculateExpression = (num1, num2, operator) => {
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
    // no default
  }

  return answer;
};

export default () => {
  const rule = 'What is the result of the expression?';

  const genQuestionsAndAnswers = () => {
    const questionsAndAnswers = [];
    const operators = ['+', '-', '*'];

    for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
      const num1 = getRandomNum(1, 10);
      const num2 = getRandomNum(1, 10);
      const operator = operators[getRandomNum(0, 2)];
      const question = `${num1} ${operator} ${num2}`;
      const answer = calculateExpression(num1, num2, operator);
      questionsAndAnswers.push([question, String(answer)]);
    }

    return questionsAndAnswers;
  };

  playGame(rule, genQuestionsAndAnswers());
};
