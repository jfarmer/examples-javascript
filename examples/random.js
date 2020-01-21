function randomInteger(min, max) {
  // Math.floor gives us an integer, but because Math.random()
  // is always less than 0, we have to add one to (max - min)
  // if we want this function to sometimes return max itself.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomEntry(array) {
  return array[randomInteger(0, array.length - 1)];
}

function randomDefault() {
  let result = Math.random();

  console.log('By default, Math.random() returns a random floating point');
  console.log('number n where 0 <= n < 1. It might return 0, but it will');
  console.log('never return 1. It selects the numbers uniformly.');

  console.log();

  console.log('Random number: ' + result);

  console.log();

  console.log('We can change the range of random numbers we receive by');
  console.log('scaling and shifting the return value of Math.random().');

  result = Math.random() * 20 + 1;

  console.log();

  console.log('For example, the below gives us a floating point number n,');
  console.log('with 1 <= n < 20.');

  console.log();

  console.log('Math.random() * 20 + 1 = ' + result);
}

function printUsage() {
  console.log('Usage:');
  console.log('node random.js default');
  console.log('  The default JS random behavior');
  console.log();
  console.log('node random.js integer <min> <max>');
  console.log('  Display an integer between min and max');
  console.log();
  console.log('node random.js list [item1 item2 ...]');
  console.log('  Randomly print one of item1, item2, item3, ...');
  console.log();
  console.log('Examples (run multiple times):');
  console.log('  node random.js integer 1 6');
  console.log('  node random.js list rock paper scissors');
}

if (process.argv.length < 3) {
  printUsage();
  process.exit();
}

let userMode = process.argv[2];

if (userMode === 'default') {
  randomDefault();
} else if (userMode === 'integer') {
  let min = Number.parseInt(process.argv[3]);
  let max = Number.parseInt(process.argv[4]);

  let result = randomInteger(min, max);

  console.log(result);
} else if (userMode === 'list') {
  let userItems = process.argv.slice(3);

  let result = randomEntry(userItems);

  console.log(result);
} else {
  console.log(`Unknown mode: ${userMode}`);
  console.log();
  printUsage();
  process.exit();
}
