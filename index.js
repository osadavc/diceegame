var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceName1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceName2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", diceName1);
document.querySelector(".img2").setAttribute("src", diceName2);

if (randomNumber1 > randomNumber2) {
  displayWinner("Player 1 Wins!");
} else if (randomNumber2 > randomNumber1) {
  displayWinner("Player 2 Wins!");
} else {
  displayWinner("Draw !");
}

function displayWinner(winnerMessage) {
  document.querySelector("h1").innerText = winnerMessage;
}
