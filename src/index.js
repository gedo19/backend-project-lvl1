import readlineSync from 'readline-sync';

export default (rule, questAndAnsw) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);

  const questionsCount = questAndAnsw.length;

  for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
    const question = questAndAnsw[questionNum][0];
    const correctAnswer = String(questAndAnsw[questionNum][1]);
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
