const fs = require("fs");

fs.writeFile("hello2.txt", "Hi there!", (err) => {
	if (err) throw err;
})

fs.readFile("hello3.txt", "utf-8", (err, data) => {
	if (err) throw err;
	console.log(data);
})