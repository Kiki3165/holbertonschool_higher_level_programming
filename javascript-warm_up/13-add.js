#!/usr/bin/node

function add (num1, num2) {
  return num1 + num2;
}

global.add = add;

const result = add(num1, num2);
console.log(result);