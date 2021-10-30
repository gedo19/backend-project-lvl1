import getRandomNum from '../getRandomNum.js';
import { playGame, questionsCount } from '../index.js';

const buildProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

export default () => {
  const rule = 'What number is missing in the progression?';

  const genQuestionsAndAnsers = () => {
    const questionsAndAnsers = [];

    for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
      const progressionStart = getRandomNum(1, 20);
      const progressionStep = getRandomNum(1, 10);
      const progressionLength = getRandomNum(5, 10);
      const progression = buildProgression(
        progressionStart,
        progressionStep,
        progressionLength,
      );
      const indexOfAnswer = getRandomNum(0, progressionLength - 1);
      const questionProgression = [...progression];
      questionProgression[indexOfAnswer] = '..';
      const question = questionProgression.join(' ');
      const answer = progression[indexOfAnswer];

      questionsAndAnsers.push([question, String(answer)]);
    }

    return questionsAndAnsers;
  };

  playGame(rule, genQuestionsAndAnsers());
};
