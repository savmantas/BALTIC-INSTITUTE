function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let sk = rand(0, 99);

if (sk >= 0 && sk <= 5) {
  let rez = sk * 3;
  console.log(
    `Sugeneruotas skaicius ${sk}. Pirma kategorija. Sugeneruotas skaicius * 3 = ${rez}.`
  );
} else if (sk >= 6 && sk <= 15) {
  let rez = (sk - 4) ** 2;
  console.log(
    `Sugeneruotas skaicius ${sk}. Antra kategorija. (Sugeneruotas skaicius - 4) ** 2 = ${rez}.`
  );
} else if (sk >= 16 && sk <= 30 && sk % 5 === 0) {
  let rez = sk + 10;
  console.log(
    `Sugeneruotas skaicius ${sk}. Trecia kategorija. Sugeneruotas skaicius + 10 = ${rez}.`
  );
} else if (sk >= 31 && sk <= 45 && sk % 2 !== 0) {
  let rez = 100 - sk;
  console.log(
    `Sugeneruotas skaicius ${sk}. Ketvirta kategorija. 100 - sugeneruotas skaicius = ${rez}.`
  );
} else if (
  sk === 46 ||
  sk === 47 ||
  sk === 56 ||
  sk === 57 ||
  sk === 66 ||
  sk === 67 ||
  sk === 76 ||
  sk === 77 ||
  sk === 86 ||
  sk === 87 ||
  sk === 96 ||
  sk === 97
) {
  let rez = sk / 4;
  console.log(
    `Sugeneruotas skaicius ${sk}. Penkta kategorija. Sugeneruotas skaicius / 4 = ${rez}.`
  );
} else {
  console.log(`Sugeneruotas skaicius nepatenka i kategorijas!`);
}

// function pakeistiElementoTeksta() {
// let vardoIvestis = document.querySelector("#vardas");
//let paragrafas = document.querySelector('.isskirtinis-paragrafas')
//let vardoIvestiesReiksme = vardoIvestis.value
//paragrafas.innerText = `Sveiki prisijunge prie puslapio, ${vardoIvestiesReiksme}`
let loginName = "Mantas";
let password = "123321";

function login() {
  let prisijungimoVardoIvestis = document.querySelector("#prisijungimoVardas");
  let prisijungimoSlaptazodzioIvestis = document.querySelector(
    "#prisijungimoSlaptazodis"
  );
 let  prisijungimoVardas = prisijungimoVardoIvestis.value
 let prisijungimoSlaptazodis = prisijungimoSlaptazodzioIvestis.value
 if (loginName === prisijungimoVardas && password === prisijungimoSlaptazodis)
 {
document.write('Prisijungete sekmingai.')
 }
 else{
document.write('Prisijungimo duomenys yra blogi.')
 }
}
