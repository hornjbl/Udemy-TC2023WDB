const fs = require("fs");

fs.readFile("newFile.txt", (err, data) => {
	if (err) throw err;
	else console.log("Yes! " + data);
})