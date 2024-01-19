const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbols = "!@#$%^&*()_+_}{|?><";

const pLength = document.querySelector("#p-length");
const upperCase = document.querySelector("#p-uppercase");
const lowerCase = document.querySelector("#p-lowercase");
const numbers = document.querySelector("#p-numbers");
const symbol = document.querySelector("#p-symbols");
const submit = document.querySelector("#submit");
const password = document.querySelector("#password");
const copyBtn = document.querySelector("#copy");


submit.addEventListener("click", () => {
  let initialPassword = empty;
  upperCase.checked ? (initialPassword += uCase) : "";
  lowerCase.checked ? (initialPassword += lCase) : "";
  numbers.checked ? (initialPassword += number) : "";
  symbol.checked ? (initialPassword += symbols) : "";
  password.value = generatePassword(pLength.value, initialPassword);
});

function generatePassword(length, initialPassword) {
  let pass = "";
  for (let i = 0; i< length; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}


copyBtn.addEventListener("click", () => {
    if (password.value === "") {
        alert('Please enter your password to copy');
    } else {
        password.setAttribute('aria-selected', true);
        document.execCommand("copy");
        alert("Password Copied");
    }
});