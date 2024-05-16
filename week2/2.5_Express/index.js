const express = require("express");
const app = express();
console.log("Server Started");

function squareRoot(n) {
	return Math.sqrt(n);
}

app.get("/", function (request, response) {
	const n = request.query.n;
	const result = squareRoot(n);
	console.log(result.toString());
	console.log(n);
	response.send(
		`Square Root of ${n ?? 1} is ${isNaN(result) ? 1 : result.toString()}`
	);
});

app.listen(3000);
