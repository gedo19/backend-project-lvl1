import playGame from '../index.js';
import getRandomNum from '../reusable/getRandomNum.js';
import buildProgression from '../reusable/buildProgression.js';

export default () => {
  const rule = 'What number is missing in the progression?';
  const genQuestionsAndAnsers = () => {
    const questionsAndAnsers = [];
    const questionsCount = 3;

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

      questionsAndAnsers.push([question, answer]);
    }

    return questionsAndAnsers;
  };

  playGame(rule, genQuestionsAndAnsers());
};
