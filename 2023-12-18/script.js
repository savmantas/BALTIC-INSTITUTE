//    -------------FILTERING--------------

/*const names = ["Justinas", "Asta", "Rasa", "Jonas", "Antanas"];
const nameInputElement = document.querySelector("#name");

function showValues(list) {
  let dynamicHTML = "";
  for (const name of list) {
    dynamicHTML += `<li>${name}</li>`;
  }
  document.querySelector("#list").innerHTML = dynamicHTML;
}

showValues(names);

nameInputElement.addEventListener("keyup", (event) => {
  const inputValue = nameInputElement.value;
  const filteredArray = names.filter((value) =>
    value.toLowerCase().includes(inputValue.toLowerCase())
  );
  showValues(filteredArray);

  console.log(filteredArray);
});*/

//  -----------------CHANGE EVENT----------------------
/*const inputElement = document.querySelector('#value')


inputElement.addEventListener('change', (event)=>{

console.log('Pildymas baigtas');
console.log(event);
})*/

//--------------FOCUS-----------------------

const inputElement = document.querySelector("#value");
inputElement.addEventListener("focus", (event) => {
  console.log("Laukelis deaktyvuotas");
  console.log(event);
});
//-------------------LOAD??????------------------
//const body = document.querySelector("body");
//body.addEventListener("load", () => {
// console.log("Puslapis uzsikrove");
//});



const paragraphElement = document.querySelector("#paragraph");
paragraphElement.addEventListener("mouseenter", () => {
  paragraphElement.style.color = "red";
});
paragraphElement.addEventListener("mouseleave", () => {
  paragraphElement.style.color = "black";
});
