import express from "express";
const app = express();
const serverPort = 4000;

app.get("/", (req, res) => {
	res.send("<h1>Hello there!</h1>");
})

app.listen(serverPort, () => {
	console.log(`Server is running on port ${serverPort}}!`);
})