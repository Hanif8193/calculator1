import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your frist number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    { message: "select one of oprator to perform action", type: "list", name: "oprator",
        choices: ["ADDITION", "SUBSTRATION", "MULTIPLICATION", "DIVISION"], }
]);
// CONDITIONAL STATEMENT
if (answer.oprator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.oprator === "SUBSTRATION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.oprator === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.oprator === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    " select the valid oprator";
}
