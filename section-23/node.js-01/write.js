const fs = require("fs");

fs.writeFile("./dir/newFile.txt", "Hello there...", (err) => {
	if (err) console.log("oh no... - " + err.message);
})