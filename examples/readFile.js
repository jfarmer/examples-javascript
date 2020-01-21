let process = require('process');
let fs = require('fs');

function printUsage() {
  console.log('Usage: node readFile.js <fileName>');
  console.log('Note: the <> in <fileName> indicate that fileName is required. Don\'t include them when running readFile.js.');
  console.log();
  console.log('Examples:');
  console.log('  node readFile.js quotes.txt');
}

function longest(strings) {
  if (strings.length === 0) {
    return;
  }

  let longestSoFar = strings[0];

  for (let item of strings) {
    if (item.length > longestSoFar.length) {
      longestSoFar = item;
    }
  }

  return longestSoFar;
}

function randomInteger(min, max) {
  // Math.floor gives us an integer, but because Math.random()
  // is always less than 0, we have to add one to (max - min)
  // if we want this function to sometimes return max itself.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomEntry(array) {
  return array[randomInteger(0, array.length - 1)];
}

// If no filename was supplied, display help message and exit.
if (process.argv.length < 3) {
  printUsage();

  process.exit();
}

let fileName = process.argv[2];

// If the given file doesn't exist, display an error message and exit.
if (!fs.existsSync(fileName)) {
  console.log(`Error: File doesn't exist, received: ${fileName}`);
  console.log();

  printUsage();

  process.exit();
}

let contents = fs.readFileSync(fileName, 'utf-8');

// \n is a special character that signifies the end of a line.
let lines = contents.split('\n');

let numLines = lines.length;
let longestLine = longest(lines);
let randomLine = randomEntry(lines);

console.log(`Stats about ${fileName}`);
console.log('----------');
console.log(`Number of lines: ${numLines}`);
console.log();

console.log('Longest line:');
console.log(longestLine);
console.log();

console.log('Random line:');
console.log(randomLine);
