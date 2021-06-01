let fs = require('fs');
let Handlebars = require('handlebars');

// Handlebars.compile is a function that takes a string as input
// whose contents are a handlebar template and returns a function.
// That function, when passed an object, returns a new string with
// the template data filled in.

// The template itself can come from anywhere: a file, a string
// hard-coded in a program, a user-supplied value, over the network, etc.
//
// The same is true for the data. It could come from user input,
// a database, a file, etc.

// Here the template is coming from a hard-coded string
let greetingTemplateSource = 'Hello, my name is {{fullName}} and I grew up in {{homeState}} ({{homeCountry}}).';
let renderGreeting = Handlebars.compile(greetingTemplateSource);

let greetingData = {
  fullName: 'Jesse Farmer',
  homeState: 'Michigan',
  homeCountry: 'USA',
};

console.log('===== TEMPLATE INFO ===========');
console.log('--- Template: hard-coded string');
console.log('--- Data:     hard-coded object');
console.log('===============================');
console.log('');
console.log(renderGreeting(greetingData));
console.log('');
console.log('');

// Here the tepmlate is coming from the file './potatoes.hbs'
let TEMPLATE_SOURCE_FILE = './potatoes.hbs';
let templateSource = fs.readFileSync(TEMPLATE_SOURCE_FILE, 'utf8');
let renderTemplate = Handlebars.compile(templateSource);
let jesseData = {
  fullName: 'Jesse Farmer',
  favoriteMusicians: [
    { name: 'Nine Inch Nails' },
    { name: 'David Bowie' },
    { name: 'Yeah Yeah Yeahs' },
  ],

  favoriteMovies: [
    { title: 'The Lobster', releaseYear: '2015' },
    { title: 'There Will Be Bloog', releaseYear: '2007' },
    { title: 'Fargo', releaseYear: '1996' },
  ],
};

console.log('===== TEMPLATE INFO ===========');
console.log(`--- Template: read from '${TEMPLATE_SOURCE_FILE}'`);
console.log('--- Data:     hard-coded object');
console.log('===============================');
console.log(renderTemplate(jesseData));
console.log('');
console.log('');



console.log('===== BEGIN RENDERED TEMPLATE =====');
console.log(renderTemplate(jesseData));
console.log('===== END RENDERED TEMPLATE =======');

let personalData = JSON.parse(fs.readFileSync('./personalData.json', 'utf8'));

console.log('===== BEGIN RENDERED TEMPLATE =====');
console.log(renderTemplate(personalData));
console.log('===== END RENDERED TEMPLATE =======');
