import readlineSync from "readline-sync";
import getName from "../cli.js";
import getRandomNum from "../reusable/getRandomNum.js";
const questionCount = 3;

const foo = () => {
  const name = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let questionNum = 1; questionNum <= questionCount; questionNum += 1) {
    const randomNumber = getRandomNum();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");

    const isNumberEven = randomNumber % 2 === 0;

    const correctAnswer = isNumberEven ? "yes" : "no";

    if (answer !== correctAnswer) {
      return console.log(`Let's try again, ${name}!`);
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${name}!`);
};

foo();
