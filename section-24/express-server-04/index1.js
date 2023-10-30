import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
	const myStreet = req.body.street;
	const myPet = req.body.pet;
	console.log(req.body);
	console.log(myStreet);
	console.log(myPet);
	res.send(`${myPet} stays at ${myStreet} street...`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
