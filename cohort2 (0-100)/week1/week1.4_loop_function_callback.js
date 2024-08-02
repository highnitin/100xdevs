// Week1.3 | Loops, Function and Callbacks
console.log("Hello Developer");

// calculate the sum from 0 to 50

let ans = 0;
for (let i = 0; i <= 50000; i++) {
	ans = ans + i;
}

// console.log(ans);

// function
// callback function
// why DRY is a good approach (don't repeat yourself)
// anonymous function

// function square(a) {
// 	return a * a;
// }

// function cube(a) {
// 	return a * a * a;
// }

// function sumOfSquare(a, b) {
// 	const sum1 = square(a);
// 	const sum2 = square(b);
// 	return sum1 + sum2;
// }

// function sumOfCube(a, b) {
// 	const sum1 = cube(a);
// 	const sum2 = cube(b);
// 	return sum1 + sum2;
// }

// const a = 5;
// const b = 10;

// console.log(square(a));
// console.log(square(b));
// console.log(sumOfSquare(a, b));

// console.log(cube(a));
// console.log(cube(b));

// console.log(sumOfCube(a, b));

// above approach is good but the code is repeating itself let solve it using callback fn

// function square(a) {
// 	return a * a;
// }

// function cube(a) {
// 	return a * a * a;
// }

// function sumOfSomething(a, b, callback) {
// 	console.log(callback);
// 	const sum1 = callback(a);
// 	const sum2 = callback(b);
// 	return sum1 + sum2;
// }

// const a = 5;
// const b = 10;

// console.log(`Square of ${a} is = `, square(a));
// console.log(`Square of ${b} is = `, square(b));

// const result1 = sumOfSomething(a, b, (a) => {
// 	return a * a;
// });
// console.log(`Sum of Square of ${a} and ${b} is = `, result1);

// console.log(`Cube of ${a} is = `, cube(a));
// console.log(`Cube of ${b} is = `, cube(b));

// const result2 = sumOfSomething(a, b, function (a) {
// 	return a * a;
// });
// console.log(`Sum of Square of ${a} and ${b} is = `, result2);
