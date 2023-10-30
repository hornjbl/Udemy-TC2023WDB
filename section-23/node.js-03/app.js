/*
-	[x] 1. Use the inquirer npm package to get user input.
-	[x] 2. Use the qr-image npm package to turn the user entered URL into a QR code imge.
-	[x] 3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
    .prompt([
        {
            name: "url",
            message: "What is the URL?",
            type: "input",
            default: "https://www.google.com"
        },
        {
            name: "filename",
            message: "Where would you like to save your input?",
            type: "input",
			suffix: " (.png)",
            default: "user_input"
        }
    ])
    .then((answers) => {
        const myURL = answers["url"];
        const myFile = answers["filename"];

		const qr_png = qr.image(myURL, {type: "png"});
		qr_png.pipe(fs.createWriteStream(`${myFile}.png`));

		fs.writeFile(`${myFile}.txt`, myURL, (err) => {
			if (err) throw err;
		})
	})
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error);
        } else {
            console.log(error);
        }
    });
