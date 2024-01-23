const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   playAudio(url)

  });
}

function playAudio(url) {
  new Audio(url).play();
}