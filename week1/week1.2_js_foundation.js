// console.log("Hello Developer");
// it will excute the log statement and hence js is a interpreted language.
// c++ is a compiled language
// interpreted languages can run line by line until they encounter error.
// static vs dynamic languages
// single threaded nature of js
// custer module in js

// var a = 1;
// a = 2;
// console.log(a);

// let a = 1;
// a = 2;
// console.log(a);

// const a = 1;
// a = 2;
// console.log(a);
// let firstName = "Ramesh";
// let isMarried = false;
// let result;
// isMarried == true ? (result = `Yes`) : (result = "No,");
// console.log(result + " is married");

// let sum = 0;
// for (let i = 0; i < 1000000000000; i++) {
// 	sum += i;
// }
// console.log(sum);

// const n = 1000000000000;
// const sum = (n * (n + 1)) / 2;
// console.log(sum);

// function sum(num1, num2) {
// 	let result = num1 + num2;
// 	return result;
// }

// function displayResult(data) {
// 	console.log("Result of the sum is : " + data);
// 	return data;
// }

// function displayResultPassive(data) {
// 	console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));

// question asked in cohort why cosole gives undefined

// function some(a, b, sum) {
// 	console.log("from some function a = ", a);
// 	console.log("from some function b = ", b);
// 	let value = sum(b, a);
// 	return value;
// }

// function sum(a, b) {
// 	console.log("from sum function a =", a);
// 	console.log("from sum function b =", b);
// 	let result = a + b;
// 	return result;
// }

// console.log(some(1, 2, sum));

// 1.3 | Basics JS APIs (Beginners)
// apis here are not actual api but referred to built in properties by harkirat
// auxillary helper methods

//string
// str.length,  not a function it is a property
// indexof("hello", "l"); // function
// lastIndexOf("hello", "l"); // function
// str.slice(start,end)
// replace("hello", "l");
// split("hello", "l");
// const str = "hello  ,  world";
// const value = str.split(" ");
// console.log(value);
// str.trim();
// toUpperCase()
// "hello".toUpperCase();
// "HELLO".toLowerCase();

// number
// parseInt - globalfunction

// array
// push()
// pop()
// shift()
// unshift()
// concat()
// indexOf()
// forEach()
// map()
// filter()
// reduce()
// slice()
// splice()
// sort()
// reverse()

// const value = [1, 2, 3];
// function sum(num) {
// 	console.log(num + 100);
// }

// value.forEach(sum);
