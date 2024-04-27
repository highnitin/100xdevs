// callback functions
// passing function as an arguements example sum of square and cube
// also called as functional arguments

// synchronous - things happend sequentially

let dt1;
function onDone() {
	// const dt1 = new Date();
	dt1 = new Date();
	// console.log(dt1.getSeconds());
	console.log("Inside function");
	console.log(dt1.getTime());
	console.log((dt1 - dt2) / 1000 + "seconds");
}

console.log("Before SetTimeout");
setTimeout(onDone, 1000);
console.log("After SetTimeout");

let sum = 0;
for (let i = 0; i < 100000; i++) {
	sum = sum + i;
}
// console.log(sum);

const dt2 = new Date();

console.log(dt2.getTime());
// console.log(dt2.getSeconds());
