const fs = require("fs");

fs.readFile("newFile.txt", "UTF-8", (err, data) => {
	if (err) throw err;
	else console.log(data);
})
