// 1. Use strict
"use strict";

// 2. Variable
// var hoisting
// var has no block scope
// use the let keyword only

const max_integer = Number.MAX_SAFE_INTEGER;
console.log(`MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`);

for (let i = 0; i < 10; i++) {
  console.log(`${i}`);
}

function printHello() {
  console.log("Hello");
}

function name(...args) {
  for (const iterator of args) {
    console.log("");
  }
}
const f = function () {};
const printMsg = (msg) => console.log(`${msg}`);
const add = (a, b) => {
  return a + b;
};

function calculate(command, a, b) {
  let retVal = null;
  switch (command) {
    case "add":
      retVal = a + b;
    case "substract":
      retVal = a - b;
    case "divide":
      if (b != 0) retVal = a / b;
    case "multiply":
      retVal = a * b;
    case "remainder":
      retVal = a % b;
    default:
      throw Error("Unkonwn command");
  }
  return retVal;
}
