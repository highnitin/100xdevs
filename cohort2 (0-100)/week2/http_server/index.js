const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const port = 6969;

// const fileSystem = require("fs");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

// let jsonObj;

// function displayData() {
// 	console.log("Hello from outside", jsonObj);
// }

// fileSystem.readFile("db.json", "utf-8", function (err, data) {
// 	if (err) throw err;
// 	jsonObj = JSON.parse(data);
// 	console.log(jsonObj);
// 	displayData(jsonObj);
// });
// app.get("/ohyeah", (request, response) => {
// 	const htmlContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Hello Developer</title>
//     </head>
//     <body>
//       <h1>Todo List For All</h1>
//       <p>Your Simple Database Tool</p>

//       <!-- For loop to generate items -->
//       ${jsonObj
// 				.map((item) => `<div>${item.title}</div> <div>${item.message}</div>`)
// 				.join("")}
// 		<!-- Button to add items -->
// 		<form>
// 		<input type=text placeholder="Add Title">
// 		<input type=text placeholder="Add Desciption">
// 		<button type=submit>Submit </button>
// 		</form>
// 		</body>
//     </html>
//   `;
// 	response.send(htmlContent);
// });

app.get("/test", (request, response) => {
	// console.log(request.body);
	response.send("Hello Developer");
	// console.log(request.body);
	// console.log(request);
	// console.log(request.headers);
	// console.log(request.headers["authorization"]);
});

app.post("/test", (request, response) => {
	response.send({
		data: "2 + 2 = 8",
	});
	console.log(request.body);
	console.log(request.body.data);
	// console.log(request.body);
	// console.log(request);
	// console.log(request.headers);
	// console.log(request.headers["authorization"]);
});

app.listen(port, () => {
	console.log(`http://localhost:${port}/ohyeah`);
	console.log("We are on Port 69!");
});

// try with post man
