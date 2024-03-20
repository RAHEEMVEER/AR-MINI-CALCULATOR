#! /usr/bin/env node
import inquirer from "inquirer";
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
    console.log(`YOUR VALUE IS`, answer.firstNumber + answer.secondNumber);
}
else if (answer.OPERATOR === "Subtraction") {
    console.log(`YOUR VALUE IS`, answer.firstNumber - answer.secondNumber);
}
else if (answer.OPERATOR === "Multiplication") {
    console.log(`YOUR VALUE IS`, answer.firstNumber * answer.secondNumber);
}
else if (answer.OPERATOR === "Division") {
    console.log(`YOUR VALUE IS`, answer.firstNumber / answer.secondNumber);
}
else if (answer.OPERATOR === "Modulo") {
    console.log(`YOUR VALUE IS`, answer.firstNumber % answer.secondNumber);
}
else if (answer.OPERATOR === "Exponen") {
    console.log(`YOUR VALUE IS`, answer.firstNumber ** answer.secondNumber);
}
else {
    console.log("YOUR CALCULATOR IS VALID.");
}
