const express = require("express");
const port = 6969;
const app = express();

console.log(app.all);

app.get("/ohyeah", (request, response) => {
	response.send("Hello Developer");
});

app.listen(port, () => {
	console.log("We are on Port 69!");
});
