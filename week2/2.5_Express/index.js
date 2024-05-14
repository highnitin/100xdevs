const express = require("express");
const app = express();
console.log("Server Started");

function squareRoot(n) {
	return Math.sqrt(n);
}

app.get("/", function (request, response) {
	const n = request.query.n;
	const result = squareRoot(n);
	console.log(n);
	response.send(`Square Root of ${n} is ${result.toString()}`);
});

// console.log(app.query);
app.listen(3000);
