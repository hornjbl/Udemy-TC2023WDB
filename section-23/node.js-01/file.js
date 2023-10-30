const fs = require("fs");

console.clear();

fs.writeFile("newFile.txt", "Hello, yet another new line", (err) => {
	if (err) throw err;
});

fs.appendFile("newFile.txt", "\n\nLine 2 written to file.", (err) => {
	if (err) throw err;
})

fs.readFile("newFile.txt", "utf-8", (err, data) => {
	if (err) throw err;
	else console.log(data);
});