const dicePlayer1 = document.querySelector(".img1");
const dicePlayer2 = document.querySelector(".img2");
const settleIt = document.querySelector(".container h1");

console.log(dicePlayer1);
console.log(dicePlayer2);

function play() {
    const rollPlayer1 = Math.ceil(Math.random() * 6);
    const rollPlayer2 = Math.ceil(Math.random() * 6);

    const rolledDicePlayer1 = `images/dice${rollPlayer1}.png`;
    const rolledDicePlayer2 = `images/dice${rollPlayer2}.png`;

    dicePlayer1.src = rolledDicePlayer1;
    dicePlayer2.src = rolledDicePlayer2;

    if (rollPlayer1 == rollPlayer2) {
        settleIt.innerText = "It's a draw!";
    } else if (rollPlayer1 > rollPlayer2) {
        settleIt.innerText = "Player 1 wins!";
    } else if (rollPlayer1 < rollPlayer2) {
        settleIt.innerText = "Player 2 wins!";
    }
}

document.getElementById("button-play").addEventListener("click", play);
