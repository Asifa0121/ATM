#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{
        name: "UserPinNumber",
        type: "number",
        message: "Enter your pin number"
    }]);
if (pinAnswer.UserPinNumber === myPin) {
    console.log("Correct pin code !!!");
    let operationAns = await inquirer.prompt([{
            name: "amount",
            type: "list",
            message: "Please select option",
            choices: ["withdraw", "check Balance"]
        }]);
    if (operationAns.amount === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check Balance") {
        console.log("Your Balance is: " + myBalance);
    }
    else if (operationAns.amount === "check Balance") {
        console.log("Your Balance is: " + myBalance);
    }
}
else {
    console.log("Invalid pin number");
}
