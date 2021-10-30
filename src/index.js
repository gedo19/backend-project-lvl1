import readlineSync from 'readline-sync';

const questionsCount = 3;

const playGame = (rule, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);
  /* eslint-disable-next-line */
  for (const questionAndAnswer of questionsAndAnswers) {
    const [question, correctAnswer] = questionAndAnswer;
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

export { playGame, questionsCount };
