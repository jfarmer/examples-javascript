let process = require('process');

/*
  See: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/

  See below for why process.argv.length < 3 is equivalen to checking
  whether there are any user-supplied arguments.
 */
if (process.argv.length < 3) {
  console.log('Usage: node commandLineArgs.js [arg1 arg2 arg3 ...]');
  console.log('');
  console.log('This program shows how to read command-line arguments.');
  console.log('Run some example commands and read the code to see what is happening.');
  console.log('');
  console.log('Examples:');
  console.log('  node commandLineArgs.js apple banana papaya');
  console.log('  node commandLineArgs.js This is a sentence');
  console.log('  node commandLineArgs.js 5 6 7 8 9');
  console.log('  node commandLineArgs.js "one two three"');
  console.log('');
  console.log('Try your own examples, too!');
  process.exit();
}

console.log('process.argv is an array containing strings.');
console.log('The "argv" in process.argv stands for "argument vector".');
console.log('');
console.log('The first two command-line arguments are always the same.');
console.log('Any elements after the first two are user-supplied.');
console.log('');
console.log('Here is a table:');

console.log('');
console.log('index | process.argv[index]');
console.log('------|---------------------------');

for (let i = 0; i < process.argv.length; i += 1) {
  let currentArg = process.argv[i];

  console.log(i + '    ' + ' | ' + currentArg);
}

console.log('');
console.log('Remember to try other examples!');
console.log('');
console.log('Run this file without any arguments to see the usage guide.');
