let word = document.querySelector(".inputText");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

btn.addEventListener("click", countVowel);
function countVowel() {
  let vowelCount = 0;
  let wordValue = word.value;

  for (let i = 0; i < wordValue.length; i++) {
    let letter = wordValue[i];
    if (letter.match(/([a,e,o,u,i])/)) {
      vowelCount++;
    }
  }
  result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}
