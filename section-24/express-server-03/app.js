import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("<h1>Hello world!</h1>");

});

app.post("/register", (reg, res) => {
	res.sendStatus(201);
});

app.put("/user/ben", (req, res) => {
	res.sendStatus(200);
});

app.patch("/user/ben", (req, res) => {
	res.sendStatus(200);
})

app.delete("/user/ben", (req, res) => {
	res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
