function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
} else if (menesis === "02") {
  console.log("Vasaris");
} else if (menesis === "03") {
  console.log("Kovas");
} else if (menesis === "04") {
  console.log("Balandis");
} else if (menesis === "05") {
  console.log("Geguze");
} else if (menesis === "06") {
  console.log("Birzelis");
} else if (menesis === "07") {
  console.log("Liepa");
} else if (menesis === "08") {
  console.log("Rugpjutis");
} else if (menesis === "09") {
  console.log("Rugsejis");
} else if (menesis === "10") {
  console.log("Spalis");
} else if (menesis === "11") {
  console.log("Lapkritis");
} else if (menesis === "12") {
  console.log("Gruodis");
} else console.log("TOKIO MENESIO NERA!");

let tekstas = "Once upon a time in hollywood.",
  mazosiosRaides = tekstas.toLocaleLowerCase(),
  zvaigzdutes = mazosiosRaides.replaceAll("o", "*");
console.log(zvaigzdutes);

let sk1 = rand(0, 2),
  sk2 = rand(0, 2),
  sk3 = rand(0, 2),
  sk4 = rand(0, 2);
let nuliai = 0,
  vienetai = 0,
  dvejetai = 0;

if (sk1 === 0) nuliai++;
else if (sk1 === 1) vienetai++;
else dvejetai++;
if (sk2 === 0) nuliai++;
else if (sk2 === 1) vienetai++;
else dvejetai++;
if (sk3 === 0) nuliai++;
else if (sk3 === 1) vienetai++;
else dvejetai++;
if (sk4 === 0) nuliai++;
else if (sk4 === 1) vienetai++;
else dvejetai++;
console.log(`Nuliu - ${nuliai}, Vienetu - ${vienetai}, Dvejetu - ${dvejetai}.`);

let n1 = rand(0, 4),
  n2 = rand(0, 4);
rez = 0;
console.log(`${n1}, ${n2}`);
if (n1 > n2) {
  rez = n1 / n2;
} else if (n1 < n2) {
  rez = n2 / n1;
}

if (n1 === n2) {
  rez = console.log("Kintamieji yra lygus.");
} else if (n2 === 0) {
  rez = console.log("Dalyba is nulio negalima!");
} else if (n1 === 0) {
  rez = console.log("Dalyba is nulio negalima!");
} else console.log(rez.toFixed(2));

let skaic1 = rand(0, 25),
  skaic2 = rand(0, 25),
  skaic3 = rand(0, 25);
let klaida = "Kazkurie skaiciai vienodi.";
console.log(`${skaic1}, ${skaic2}, ${skaic3}`);

if (
  (skaic1 < skaic2 && skaic1 > skaic3) ||
  (skaic1 < skaic3 && skaic1 > skaic2)
) {
  console.log(skaic1);
} else if (
  (skaic2 < skaic1 && skaic2 > skaic3) ||
  (skaic2 < skaic3 && skaic2 > skaic1)
) {
  console.log(skaic2);
} else if (
  (skaic3 < skaic2 && skaic3 > skaic1) ||
  (skaic3 < skaic1 && skaic3 > skaic2)
) {
  console.log(skaic3);
} else console.log(klaida);

let raide1 = rand(97, 120),
  raide2 = rand(97, 120),
  raide3 = rand(97, 120);
console.log(String.fromCharCode`${raide1}, ${raide2}, ${raide3}`);

let pastraipa =
  "The planet {{planet}} is the third planet from the {{star}}. {{planet}} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, {{planet}} formed over {{age}} ago. {{planet}}*s gravity interacts with other objects in space, especially the {{star}} and the {{satellite}}, {{planet}}*s only natural satellite.";
console.log(pastraipa);
let zodis = "Earth",
  zodis1 = "Sun",
  zodis2 = "4.54 billion years",
  zodis3 = "Moon";
zodis4 = "'";
let pakeistaPastraipa = pastraipa.replaceAll("{{planet}}", zodis);
let pakeistaPastraipa1 = pakeistaPastraipa.replaceAll("{{star}}", zodis1);
let pakeistaPastraipa2 = pakeistaPastraipa1.replaceAll("{{age}}", zodis2);
let pakeistaPastraipa3 = pakeistaPastraipa2.replaceAll("{{satellite}}", zodis3);
let pakeistaPastraipa4 = pakeistaPastraipa3.replaceAll("*", zodis4);
console.log(pakeistaPastraipa4);
