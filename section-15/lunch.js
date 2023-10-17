function whosPaying(names) {
    const lenNames = names.length;
    const randNumber = Math.floor(Math.random() * lenNames);

    return `${names[randNumber]}(${randNumber}) is paying for lunch today!`;
}

const namesList1 = ["David", "Eve", "Charlie", "Alice", "Bob"];
const namesList2 = ["Emma", "Liam", "Olivia", "Noah", "Ava"];

console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
console.log(whosPaying(namesList1));
