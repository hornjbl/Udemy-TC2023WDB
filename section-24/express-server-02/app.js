import express from "express";
import inquirer from "inquirer";
import fs from "fs";

const fileName = "server.log";
const app = express();
const port = 5000;

inquirer.prompt([{ type: "input", name: "name", message: "What is your name?" }]).then((ans) => {
    console.log();
    fs.writeFile(fileName, `User's name is ${ans.name}!`, (err) => {
        if (err) throw err;
    });

	app.get("/about", (req, res) => {
		res.sendStatus(404);
	})

    app.get("/", (request, resp) => {
        // console.log(request);
        resp.send(`\nHello there ${ans.name}!`);
        fs.appendFile(fileName, "\n" + JSON.stringify(request.rawHeaders), (err) => {
            if (err) throw err;
        });
    });

    app.listen(port, () => {
        fs.appendFile(fileName, `\n${ans.name} has started the server on port ${port}`, (err) => {
            if (err) throw err;
        });
    });
});
