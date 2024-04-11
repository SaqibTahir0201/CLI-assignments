import inquirer from "inquirer"
//! 1 => Computer Will Generate Random Numbers
//! 2 => user input for guessing number
//! 3 => compare user number against computer number nad show result
const randomNumber = 15
const answers = await inquirer.prompt([{
    name:"userGuessNumber",
    type:"number",
    message:"guess number"
}])

console.log(answers);
