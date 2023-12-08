let vardas = "Mantas",
  pavarde = "Savickas";
if (vardas.length > pavarde.length) console.log(vardas);
else console.log(pavarde);

let sieMetai = 2023;
let gimimoMetai = 1987;
let amzius = sieMetai - gimimoMetai;
console.log(`As esu ${vardas} ${pavarde}. Man yra ${amzius} metai.`);

let inicialai = vardas[0] + " " + pavarde[0];

console.log(inicialai);

let paskutinesRaides =
  vardas[3] + vardas[4] + vardas[5] + pavarde[5] + pavarde[6] + pavarde[7];
console.log(paskutinesRaides);

let data = "2023-07-10";

let menesis = data[5] + data[6];

if (data[5] + data[6] === "01") {
  console.log("Sausis");
}
else if  (data[5] + data[6] === "02") {
  console.log("Vasaris");
}
else if (data[5] + data[6] === "03") {
  console.log("Kovas");
}
else if (data[5] + data[6] === "04") {
  console.log("Balandis");
}
else if (data[5] + data[6] === "05") {
  console.log("Geguze");
}
else if (data[5] + data[6] === "06") {
  console.log("Birzelis");
}
else if (data[5] + data[6] === "07") {
  console.log("Liepa");
}
else if (data[5] + data[6] === "08") {
  console.log("Rugpjutis");
}
else if (data[5] + data[6] === "09") {
  console.log("Rugsejis");
}
else if (data[5] + data[6] === "10") {
  console.log("Spalis");
}
else if (data[5] + data[6] === "11") {
  console.log("Lapkritis");
}
else if (data[5] + data[6] === "12") {
  console.log("Gruodis");
} else console.log("TOKIO MENESIO NERA!");
