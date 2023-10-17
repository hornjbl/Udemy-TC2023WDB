var guestList = ["Jack", "Jill", "Peter", "Amos"];

console.log("Printing the whole array...");
console.log(guestList);

console.log("Checking what the first element of the array is...");
console.log(guestList[0]);

console.log("Checking if array includes 'Peter'...");
console.log(guestList.includes("Peter"));

console.log("Adding another member to the array...");
guestList.push("Susan");
console.log(guestList);

console.log("Removing a member from the array...");
guestList.pop();
console.log(guestList);
