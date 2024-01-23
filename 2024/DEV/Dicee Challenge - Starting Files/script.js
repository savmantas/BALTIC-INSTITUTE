const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomDiceImage1 = "dice" + randomNumber1 + ".png";
const randomDiceImage2 = "dice" + randomNumber2 + ".png";
const randomImageSource1 = "images/" + randomDiceImage1;
const randomImageSource2 = "images/" + randomDiceImage2;
const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);
let changeText = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  changeText.innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  changeText.innerHTML = "Player 2 Wins!🚩";
} else changeText.innerHTML = "🚩It's a draw!🚩";
