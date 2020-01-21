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

let userInput;
let password = 'adjacent123';

while (userInput !== password) {
  if (userInput !== undefined) {
    console.log('Incorrect password!');
    console.log('Look at examples/password.js to see the password.');
    console.log();
  }

  let config = {
    hideEchoBack: true,
  };
  userInput = readlineSync.question('Enter password: ', config);
}

console.log('SECRET UNLOCKED!');
