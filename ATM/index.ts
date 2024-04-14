#! /usr/bin/env node 
import inquirer from "inquirer";

let myBalance = 10000; //~ DOLLAR

let myPinCode = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your PIN code",
    type: "number",
  },
]);
console.log(pinAnswer.pin);

if (pinAnswer.pin === myPinCode) {
  console.log("correct pin!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);
  //! WITHDRAW
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter amount to withdraw",
        type: "number",
      },
    ]);

    if (myBalance >= amountAns.amount) {
      myBalance -= amountAns.amount;
      console.log("withdrawal successful");
    } else {
      console.log("insufficient balance");
    }

    console.log(` your remaining balance is ${myBalance}`);

    //! CHECK BALANCE
  } else if (operationAns.operation === "check balance") {
    console.log(` your balance is ${myBalance}`);
  }
  //! FAST CASH
  else if (operationAns.operation === "fast cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "fastCash",
        message: "please select option",
        type: "list",
        choices: [500, 1000, 5000, 10000],
      },
    ]);
    if (fastCashAns.fastCash === 500) {
      myBalance -= 500;
      console.log("fast cash successful");
      console.log(`remaining cash is ${myBalance}`);
    } else if (fastCashAns.fastCash === 1000) {
      myBalance -= 1000;
      console.log("fast cash successful");
      console.log(`remaining cash is ${myBalance}`);
    } else if (fastCashAns.fastCash === 5000) {
      myBalance -= 5000;
      console.log("fast cash successful");
      console.log(`remaining cash is ${myBalance}`);
    } else if (fastCashAns.fastCash === 10000) {
      myBalance = 0;
      console.log("fast cash successful");
      console.log(`remaining cash is ${myBalance}`);
    }
  }
} else {
  console.log("incorrect pin");
}
