let playerOneDice = document.querySelector(".img1");
let playerTwoDice = document.querySelector(".img2");
let text = document.querySelector("h1");
let number1 = Math.floor(Math.random() * 6 + 1);
let number2 = Math.floor(Math.random() * 6 + 1);

function randomNumber1() {
  playerOneDice.setAttribute("src", "images/" + "dice" + number1 + ".png");
  playerTwoDice.setAttribute("src", "images/" + "dice" + number2 + ".png");
  if (number1 < number2) {
    text.innerHTML = "Player Two Wins!";
  } else if (number1 > number2) {
    text.innerHTML = "Player One Wins!";
  }
  else {text.innerHTML = "It's a draw!";}
}

randomNumber1();
