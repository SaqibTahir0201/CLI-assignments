#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1, //$ BASE CURRENCY
  EUR: 0.9,
  GBP: 0.8,
  JPY: 120.0,
  CAD: 1.3,
  CHF: 1.0,
  AUD: 1.5,
  PKR: 300,
};

let user_name = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "EUR", "CHF", "AUD", "PKR"],
  },
  {
    name: "to",
    message: "Enter TO currency",
    type: "list",
    choices: ["USD", "EUR", "CHF", "AUD", "PKR"],
  },
  {
    name: "amount",
    message: "Enter amount",
    type: "number",
  },
]);

let fromAmount = currency[user_name.from];
let toAmount = currency[user_name.to];
let amount = user_name.amount;
let baseAmount = amount / fromAmount; //USD base amount
let convertAmount = baseAmount * toAmount;
// console.log("fromAmount" + fromAmount);
// console.log("toAmount" +toAmount);
// console.log("amount" +amount);
// console.log("baseAmount" +baseAmount);
console.log("convertAmount" + convertAmount);
