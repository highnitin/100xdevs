// Week1.5 Async, Await & Promises

// asynchronous functions and synchronous functions

// example creating maggie
// real time example - reading files form the file system, if it runs on the main js thread then it cannot execute other work.
// context switching between tasks and delegating tasks.

// can js delegate task? can js do context switching?
// yes using ascychronous functions - example setTimeout()

// setTimeout(() => {}, timeout);

// interesting fact about setTimeout

// function printText(str) {
// 	return console.log("From printText", str);
// 	// return str;
// }

// const text = "Hello World";

// function callback() {
// 	return console.log("From CallBack", printText(text));
// }

// setTimeout(callback, 1000);
// // console.log("setTimeout",abc);

// console.log("Hello Developer");

// another example of async in node js filesystem also have a async behaviour

// const fileSystem = require("fs");

// fileSystem.readFile("a.txt", "utf8", function (err, data) {
// 	if (err) throw err;

// 	console.log(data);
// });

// console.log("Hello World");

// there are 4 high level things that makes js async - 1. callStack, 2. webAPIs, 3. eventLoop & 4. callback & queue.

// explore more here - http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRUZXh0KHN0cikgew0KCXJldHVybiBjb25zb2xlLmxvZygiRnJvbSBwcmludFRleHQiLCBzdHIpOw0KCS8vIHJldHVybiBzdHI7DQp9DQoNCmNvbnN0IHRleHQgPSAiSGVsbG8gV29ybGQiOw0KDQpmdW5jdGlvbiBjYWxsYmFjaygpIHsNCglyZXR1cm4gY29uc29sZS5sb2coIkZyb20gQ2FsbEJhY2siLCBwcmludFRleHQodGV4dCkpOw0KfQ0KDQpzZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwKTsNCi8vIGNvbnNvbGUubG9nKCJzZXRUaW1lb3V0IixhYmMpOw0KDQpjb25zb2xlLmxvZygiSGVsbG8gRGV2ZWxvcGVyIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
