const express = require("express");
const fileSystem = require("fs");

const port = 6969;
const app = express();

let jsonObj;

function displayData() {
	console.log("Hello from outside", jsonObj);
}

fileSystem.readFile("db.json", "utf-8", function (err, data) {
	if (err) throw err;
	jsonObj = JSON.parse(data);
	console.log(jsonObj);
	displayData(jsonObj);
});
app.get("/ohyeah", (request, response) => {
	const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello Developer</title>
    </head>
    <body>
      <h1>Todo List For All</h1>
      <p>Your Simple Database Tool</p>

      <!-- For loop to generate items -->
      ${jsonObj
				.map((item) => `<div>${item.title}</div> <div>${item.message}</div>`)
				.join("")}
		<!-- Button to add items -->
		<form>
		<input type=text placeholder="Add Title">
		<input type=text placeholder="Add Desciption">
		<button type=submit>Submit </button>
		</form>
		</body>
    </html>
  `;
	response.send(htmlContent);
});

app.listen(port, () => {
	console.log(`http://localhost:${port}/ohyeah`);
	console.log("We are on Port 69!");
});
