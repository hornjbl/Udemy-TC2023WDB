var userInput =
    "This is the user's input. It will typically be requested via the prompt() function, which doesn't currently work in VS Code without some hacky workarounds.";
var charCount = userInput.length;
const maxLength = 200;
var charRemaining = maxLength - charCount;

console.log("You have written " + charCount + " characters. You have " + charRemaining + " characters remaining out of " + maxLength + ".");
