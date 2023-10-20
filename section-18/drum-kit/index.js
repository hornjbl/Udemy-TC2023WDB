function handleClick() {
    alert("Click!");
}

const allButtons = document.getElementsByTagName("button");

// const elArray = Array.from(allButtons);

// elArray.forEach((element) => {
//     element.addEventListener("click", handleClick);
// });

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("dblclick", handleClick);
}
