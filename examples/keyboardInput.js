let process = require('process');

let readlineSync;
try {
  readlineSync = require('readline-sync');
} catch (err) {
  console.log('You must install the readline-sync module. Run the following');
  console.log('command to install it:');
  console.log();
  console.log('  npm install');
  console.log();

  process.exit();
}

let firstName = readlineSync.question('What is your first name? ');
let lastName = readlineSync.question('What is your last name? ');

let fullName = `${firstName} ${lastName}`;

console.log();
console.log(`Hello, ${fullName}!`);
console.log();

let firstNumber = readlineSync.question('Give me one number: ');
let secondNumber = readlineSync.question('Give me another number: ');

firstNumber = Number.parseInt(firstNumber);
secondNumber = Number.parseInt(secondNumber);

let sum = firstNumber + secondNumber;
let product = firstNumber * secondNumber;
let max = Math.max(firstNumber, secondNumber);

console.log();
console.log(`You entered ${firstNumber} and ${secondNumber}.`);
console.log();

console.log(`${firstNumber} + ${secondNumber} is ${sum}.`);
console.log(`${firstNumber} * ${secondNumber} is ${product}.`);
console.log(`max(${firstNumber}, ${secondNumber}) is ${max}.`);
console.log();
