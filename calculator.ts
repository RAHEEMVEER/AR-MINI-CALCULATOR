#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let continueCalc = true;
while (continueCalc) {
  const answer = await inquirer.prompt([
    { message: "ENTER FIRST NUMBER", type: "number", name: "firstNumber" },
    { message: "ENTER SECOND NUMBER", type: "number", name: "secondNumber" },
    {
      message: "SELECT ONE OF THE OPERTAOR TO PERFORM OPERATIONS.",
      type: "list",
      name: "OPERATOR",
      choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Modulo",
        "Exponen",
      ],
    },
  ]);

  if (answer.OPERATOR === "Addition") {
    console.log(
      `${answer.firstNumber} + ${answer.secondNumber} =`,
      answer.firstNumber + answer.secondNumber
    );
  } else if (answer.OPERATOR === "Subtraction") {
    console.log(
      `${answer.firstNumber} - ${answer.secondNumber} =`,
      answer.firstNumber - answer.secondNumber
    );
  } else if (answer.OPERATOR === "Multiplication") {
    console.log(
      `${answer.firstNumber} * ${answer.secondNumber} =`,
      answer.firstNumber * answer.secondNumber
    );
  } else if (answer.OPERATOR === "Division") {
    console.log(
      `${answer.firstNumber} / ${answer.secondNumber} =`,
      answer.firstNumber / answer.secondNumber
    );
  } else if (answer.OPERATOR === "Modulo") {
    console.log(
      `${answer.firstNumber} % ${answer.secondNumber} =`,
      answer.firstNumber % answer.secondNumber
    );
  } else if (answer.OPERATOR === "Exponen") {
    console.log(
      `${answer.firstNumber} ** ${answer.secondNumber} =`,
      answer.firstNumber ** answer.secondNumber
    );
  } else {
    console.log("YOUR CALCULATOR IS VALID.");
  }

  const { wantToContinue } = await inquirer.prompt([
    {
      message: "DO YOU WANT TO PERFORM ANOTHER CALCULATION",
      type: "confirm",
      name: "wantToContinue",
    },
  ]);
  continueCalc = wantToContinue;

  console.log(`
    THANKS FOR USING. THIS CALCULATOR IS CREATE BY ${chalk.green(
      "RAHEEM VEER"
    )}`);
}
