const buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = "";
let userClickedPattern = [];
let gamePattern = [];

function playSound(color) {
    $(`#${color}`).fadeOut(100).fadeIn(100);
    // console.log(color);
    const buttonAudio = new Audio(`./sounds/${color}.mp3`);
    buttonAudio.play();
}

function nextSequence() {
    let randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
	$("#level-text").text(`${userClickedPattern.length} \\ ${gamePattern.length}`);
}
// $(`#${randomChosenColor}`).fadeOut(20).fadeIn(20).fadeOut(20).fadeIn(20).fadeOut(20).fadeIn(20);

$(".btn").click((usrEvent) => {
    const userChosenColor = usrEvent.target.id;
    userClickedPattern.push(userChosenColor);
	playSound(userChosenColor);
    $("#level-text").text(`${userClickedPattern.length} \\ ${gamePattern.length}`);
	// console.log(userClickedPattern);
    // console.log(gamePattern);

    // The user has made the right mount of clicks
    if (gamePattern.slice(0, userClickedPattern.length).toString() != userClickedPattern.toString()) {
		playSound("wrong");
        console.log("You lose!");
		$("#level-title").text("You lose!");
		$("#level-text").text("Press <space> to try again")
		$(".btn").attr("disabled", true);
    } else if (gamePattern.length == userClickedPattern.length) {
		console.log(`Clicked: ${userClickedPattern}`);
        console.log(`Game: ${gamePattern}`);
		userClickedPattern = [];
        setTimeout(nextSequence, 1000);
	
    } else {
		console.log(`Clicked: ${userClickedPattern}`);
        console.log(`Game: ${gamePattern}`);
    }
});

$(document).keydown((keyEvent) => {
    if (keyEvent.key == " ") {
		console.clear();
		$("#level-title").text("GO!");
		$("#level-text").text(`0\\1`);
		$(".btn").attr("disabled", false);
        userClickedPattern = [];
        gamePattern = [];
        nextSequence();
    }
});

$(".btn").attr("disabled", true); 