import readlineSync from 'readline-sync';
import getName from '../reusable/greeting.js';
import getRandomNum from '../reusable/getRandomNum.js';

export default () => {
  const name = getName();
  const questionsCount = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let question = 1; question <= questionsCount; question += 1) {
    const randomNumber = getRandomNum();
    const isNumberEven = randomNumber % 2 === 0;
    const correctAnswer = isNumberEven ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      return console.log(`Let's try again, ${name}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};
