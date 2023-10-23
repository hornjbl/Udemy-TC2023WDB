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
			buttonAnimation(this.classList[0]);

			audioDrum.play();
    });	
}

document.addEventListener("keydown", (event) => {
	const keyPressed = event.key;
	
	switch (keyPressed) {
		case "w":
			const drumW = new Audio(`./sounds/drum-W.mp3`);
			drumW.play();
			// drumW.cloneNode().play();
			break;
		case "a":
			const drumA = new Audio(`./sounds/drum-A.mp3`);
			drumA.play();
			break;
		case "s":
			const drumS = new Audio(`./sounds/drum-S.mp3`);
			drumS.play();
			break;
		case "d":
			const drumD = new Audio(`./sounds/drum-D.mp3`);
			drumD.play();
			break;
		case "j":
			const drumJ = new Audio(`./sounds/drum-J.mp3`);
			drumJ.play();
			break;
		case "k":
			const drumK = new Audio(`./sounds/drum-K.mp3`);
			drumK.play();
			break;
		case "l":
			const drumL = new Audio(`./sounds/drum-L.mp3`);
			drumL.play();
			break;
		default:
			break;
	};
	buttonAnimation(keyPressed);
});

function buttonAnimation(currentKey) {
	const elButton = document.getElementsByClassName(`${currentKey}`)[0];

	elButton.classList.add("pressed");

	setTimeout(() => {
		elButton.classList.remove("pressed");
	},100);
	
}