// let a = "20";
// let b = 50;

// function sum(a, b) {
// 	console.log(a + b);
// }

// sum(a, b);

let n = 1;
let sum = 0;
function sumN(n) {
	sum = n * (n + 1);
	console.log(sum);
}

// import { readFileSync } from "fs";

const fs = require("fs");
// const content = readFileSync("lorem.txt", "utf-8");
const hello = fs.readFileSync("hello.txt", "utf-8");
const developer = fs.readFileSync("developer.txt", "utf-8");

let result = hello.concat(" ", developer);

console.log(result);
