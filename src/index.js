import readlineSync from 'readline-sync';

export default (rule, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);

  const questionsCount = questionsAndAnswers.length;

  for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
    const question = questionsAndAnswers[questionNum][0];
    const correctAnswer = String(questionsAndAnswers[questionNum][1]);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
      );
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};
