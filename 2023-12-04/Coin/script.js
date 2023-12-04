let herbas = 0;
let skaicius = 0;

function flipCoin() {
  let result = Math.floor(Math.random() * 2);

  if (result === 0) {
    herbas++;
    document.getElementById("herbas").textContent = herbas;
    document.getElementById("moneta").value = "HERBAS";
  } else {
    skaicius++;
    document.getElementById("skaicius").textContent = skaicius;
    document.getElementById("moneta").value = "SKAIČIUS";
   
  }
}
