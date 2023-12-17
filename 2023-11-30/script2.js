function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function categoryOneCalculation(skaicius) {
  let rez = skaicius * 3;
  return rez;
}

function categoryTwoCalculation(skaicius) {
  let rez = (skaicius - 4) ** 2;
  return rez;
}

function categoryThirdCalculation(skaicius) {
  let rez = skaicius + 10;
  return rez;
}
function categoryFourthCalculation(skaicius) {
  let rez = 100 - skaicius;
  return rez;
}
function categoryFifthCalculation(skaicius) {
  let rez = skaicius / 4;
  return rez;
}

let sk = rand(0, 99);

console.log(sk);
if (sk >= 0 && sk <= 5) {
  console.log(
    `Sugeneruotas skaicius ${sk}. Pirma kategorija. Sugeneruotas skaicius ${categoryOneCalculation(
      sk
    )}.`
  );
} else if (sk >= 6 && sk <= 15) {
  console.log(
    `Sugeneruotas skaicius ${sk}. Antra kategorija. (Sugeneruotas skaicius - 4) ** 2 = ${categoryTwoCalculation(
      sk
    )}.`
  );
} else if (sk >= 16 && sk <= 30 && sk % 5 === 0) {
  console.log(
    `Sugeneruotas skaicius ${sk}. Trecia kategorija. Sugeneruotas skaicius + 10 = ${categoryThirdCalculation(
      sk
    )}.`
  );
} else if (sk >= 31 && sk <= 45 && sk % 2 !== 0) {
  console.log(
    `Sugeneruotas skaicius ${sk}. Ketvirta kategorija. 100 - sugeneruotas skaicius = ${categoryFourthCalculation(
      sk
    )}.`
  );
} else if ((sk >= 46 && sk <= 99 && sk % 10 === 6) || sk % 10 === 7) {
  console.log(
    `Sugeneruotas skaicius ${sk}. Penkta kategorija. Sugeneruotas skaicius / 4 = ${categoryFifthCalculation(
      sk
    )}.`
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
  let prisijungimoVardas = prisijungimoVardoIvestis.value;
  let prisijungimoSlaptazodis = prisijungimoSlaptazodzioIvestis.value;
  if (
    loginName === prisijungimoVardas &&
    password === prisijungimoSlaptazodis
  ) {
    document.write("Prisijungete sekmingai.");
  } else {
    document.write("Prisijungimo duomenys yra blogi.");
  }
}
