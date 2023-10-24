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
    $("#level-title").text(`${userClickedPattern.length} \\ ${gamePattern.length}`);
}
// $(`#${randomChosenColor}`).fadeOut(20).fadeIn(20).fadeOut(20).fadeIn(20).fadeOut(20).fadeIn(20);

function handleEvent(color) {
    const userChosenColor = color;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    $("#level-title").text(`${userClickedPattern.length} \\ ${gamePattern.length}`);
    // console.log(userClickedPattern);
    // console.log(gamePattern);

    // The user has made the right mount of clicks
    if (gamePattern.slice(0, userClickedPattern.length).toString() != userClickedPattern.toString()) {
        playSound("wrong");
        console.log("You lose!");
        $("#level-title").text("You lose!");
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
}

$("#play").click(() => {
    console.clear();
    $("#level-title").text(`0\\1`);
    $(".btn").attr("disabled", false);
    userClickedPattern = [];
    gamePattern = [];
    nextSequence();
});

$(".btn").click((usrEvent) => {
    handleEvent(usrEvent.target.id);
});

$(document).keydown((keyEvent) => {
    switch (keyEvent.key) {
        case " ":
            console.clear();
            $("#level-title").text(`0\\1`);
            $(".btn").attr("disabled", false);
            userClickedPattern = [];
            gamePattern = [];
            nextSequence();
            break;
        case "4":
            if ($(".btn").attr("disabled") != "disabled") {
                handleEvent("green");
            }
            break;
        case "5":
            if ($(".btn").attr("disabled") != "disabled") {
                handleEvent("red");
            }
            break;
        case "1":
            if ($(".btn").attr("disabled") != "disabled") {
                handleEvent("yellow");
            }
            break;
        case "2":
            if ($(".btn").attr("disabled") != "disabled") {
                handleEvent("blue");
            }
            break;
        default:
            break;
    }
});

$(".btn").attr("disabled", true);
