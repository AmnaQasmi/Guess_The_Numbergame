#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let genNum = Math.floor(Math.random() * 2);
let user = await inquirer.prompt({
    name: "num1",
    type: "list",
    message: "please select the number : ",
    choices: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
});
if (genNum == parseInt(user.num1)) {
    console.log(chalk.bold.bgBlueBright("Congratulations You Win"));
}
else {
    console.log(chalk.bold.bgRedBright("Sorry! Better Luck Next Time ;) "));
}
// console.log(user);
