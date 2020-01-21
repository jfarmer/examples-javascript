# Examples

Here are some examples of common patterns in Javascript.

## Command Line Arguments

Run [examples/commandLineArgs.js](examples/commandLineArgs.js) from the command line and read the code to get an overview of how command line arguments work.

When we run a program like:

```console
node hello.js one two three
```

our program in `hello.js` can get access to an array that looks like

```javascript
['one', 'two', 'three']
```

These are called "command line arguments".

## Add

Run [examples/add.js](examples/add.js) from the command line to see how it works. This is a "fully-featured" command line program that adds two numbers.

It contains proper error handling and useful help messages. It's heavily commented.

## Random Numbers

In JavaScript, we use [Math.random][mdn-math-random] to generate random numbers.

Run [examples/random.js](examples/random.js) from the command line and read the code for an overview of common patterns.

[mdn-math-random]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

## Interactive Keyboard Input

Run [examples/keyboardInput.js](examples/keyboardInput.js) from the command line and read the code to see examples of interactive keyboard input.

We're using the [readline-sync module](npm-readline-sync).

You'll need to run the following command inside the `examples-javascript` directory to install `readline-sync`:

```console
npm install
```

## Hidden Input

Run [examples/password.js](examples/password.js) from the command line and read the code to see examples of how to hide user inputs.

We're using the [readline-sync module](npm-readline-sync).

You'll need to run the following command inside the `examples-javascript` directory to install `readline-sync`:

```console
npm install
```

[npm-readline-sync]: https://www.npmjs.com/package/readline-sync
