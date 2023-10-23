function handleClick() {
    alert("Click!");
}

const allButtons = document.getElementsByClassName("drum");

// const elArray = Array.from(allButtons);

// elArray.forEach((element) => {
//     element.addEventListener("click", handleClick);
// });

for (let i = 0; i < allButtons.length; i++) {
	// allButtons[i].addEventListener("click", handleClick);
	
	// allButtons[i].addEventListener("click", function() {
		// 	alert("I got clicked!");
		// })
		
		allButtons[i].addEventListener("click", function () {
			const audioDrum = new Audio(`./sounds/drum-${this.classList[0]}.mp3`);

			audioDrum.play();
    });	
}
