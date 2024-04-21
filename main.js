#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    PKR: 278.45,
    INR: 83.59,
    EUR: 0.94,
    CAD: 1.38,
    TRY: 32.51,
    LKR: 301.24,
    SAR: 3.75,
    QAR: 3.64,
    KWD: 0.31,
    CNY: 7.24,
    AUD: 1.56,
    JPY: 154.6,
    GBP: 0.8,
};
let answer = await inquirer.prompt([
    {
        name: "optionFrom",
        message: chalk.bold.magenta("Provide base currency"),
        type: "list",
        choices: [
            "USD",
            "GBP",
            "PKR",
            "INR",
            "CNY",
            "JPY",
            "KWD",
            "QAR",
            "CAD",
            "EUR",
            "AUD",
            "TRY",
            "SAR",
            "LKR",
        ],
    },
    {
        name: "optionTo",
        message: chalk.bold.magenta("Provide target currency"),
        type: "list",
        choices: [
            "USD",
            "GBP",
            "PKR",
            "INR",
            "CNY",
            "JPY",
            "KWD",
            "QAR",
            "CAD",
            "EUR",
            "AUD",
            "TRY",
            "SAR",
            "LKR",
        ],
    },
    {
        name: "amount",
        message: chalk.bold.magenta("Specify the amount"),
        type: "number",
    },
]);
let Amount1 = currency[answer.optionFrom];
let Amount2 = currency[answer.optionTo];
let amount = answer.amount;
if (isNaN(Amount1) || isNaN(Amount2) || isNaN(amount)) {
    console.log(chalk.red.yellowBright.italic("Error: Input must be valid numbers."));
}
else {
    const baseCurrency = amount / Amount1;
    const conversion = baseCurrency * Amount2;
    console.log(chalk.bold.green.italic(`conversion = ${conversion.toFixed(0)}`));
}
