import inq from "inquirer";
import qr from "qr-image";
import fs from "fs";

inq
    .prompt([
        {
			name: "url",
			type: "input",
			message: "Please provide a url",
			default: "www.google.com"
		}
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
		console.log(answers.url);
		const qrPNG = qr.image(answers.url, {type: "png"});
		qrPNG.pipe(fs.createWriteStream(`${answers.url}.png`));
		// qr.image(answers.url)
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
