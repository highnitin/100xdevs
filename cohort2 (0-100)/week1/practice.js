console.log("Hello Developer");

// practicing promise and async await

// const data1 = new Promise((resolve, reject) => {
// 	console.log("Hello Inside Promise");
// 	setTimeout(() => {
// 		resolve(5);
// 		// console.log("promise resolved");
// 	}, 3000);
// });
// console.log(data1);

// setTimeout(() => {
// 	console.log(data1);
// }, 4000);

// data1
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// const data2 = data1.then(() => {
// 	console.log("Hello Inside Data2");
// });

// console.log(data2);

// data.resolve((info) => {
// 	console.log("Hello Inside Resolve");
// });

// console.log(data);

// const myPromise = new Promise((resolve, reject) => {
// 	console.log("Inside Promise");
// 	setTimeout(() => {
// 		resolve(5);
// 	}, 3000);
// });

// console.log("First", myPromise);

// const myPromiseStatus = async () => {
// 	console.log("Calling");
// 	console.log(myPromise);
// 	const result = await myPromise;
// 	console.log(myPromise);
// 	console.log(result);
// };

// myPromiseStatus();
// console.log("Second", myPromise);
// const result = Promise.resolve(p);
// console.log(result);
// const result = await p;
// console.log(result);
// console.log(p);
// console.log(p);

// console.log("---------------------------------------");
// console.log("---------------------------------------");
// console.log("---------------------------------------");
// console.log("---------------------------------------");
// const p = new Promise((res, rej) => {
// 	setTimeout(() => {
// 		res(1);
// 	}, 3000);
// });

// function basicReturn() {
// 	return Promise.resolve(p);
// }
// async function asyncReturn() {
// 	const result = await p;
// 	return p;
// }

// console.log("P", p);
// console.log("BasicReturn", basicReturn());
// console.log("AsyncReturn", asyncReturn());

// console.log(p === basicReturn()); // true
// console.log(p === asyncReturn()); // false

// const p = new Promise((res, rej) => {
// 	res(1);
// });

// async function asyncReturn() {
// 	return p.then(() => p);
// }

// function basicReturn() {
// 	return Promise.resolve(p);
// }

// console.log(p === basicReturn()); // true

// console.log(p === asyncReturn()); // falses

// const p = new Promise((res, rej) => {
// 	res(1);
// });

// async function asyncReturn() {
// 	return 1;
// }

// function basicReturn() {
// 	return p;
// }

// console.log(1 === basicReturn()); // true
// console.log(p === asyncReturn()); // true
