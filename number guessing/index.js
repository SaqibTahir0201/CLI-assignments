#! /usr/bin/env node 
//shabang
import inquirer from "inquirer";
//! 1 => Computer Will Generate Random Numbers
//! 2 => user input for guessing number
//! 3 => compare user number against computer number nad show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "guess number between 1-10"
    }]);
if (answers.userGuessNumber === randomNumber) {
    console.log("congratulation");
}
else {
    console.log("ops! wrong");
}
console.log(`the is ${randomNumber}`);
