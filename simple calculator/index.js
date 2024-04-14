#! /usr/bin/env node 
//shabang
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform actions",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);
//? condition statements
// if (answer.operator === "+") {
//   console.log(answer.firstNumber + answer.secondNumber);
// }
switch (answer.operator) {
    case "+":
        console.log(answer.firstNumber + answer.secondNumber);
        break;
    case "-":
        console.log(answer.firstNumber - answer.secondNumber);
        break;
    case "*":
        console.log(answer.firstNumber * answer.secondNumber);
        break;
    case "/":
        console.log(answer.firstNumber / answer.secondNumber);
        break;
    default:
        break;
}


