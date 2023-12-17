/*function rand(min, max) {
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
}*/
let loginName = "Mantas";
let password = "Savmantas1.";

function login() {
  let prisijungimoVardoIvestis = document.querySelector("#prisijungimoVardas");
  let prisijungimoSlaptazodzioIvestis = document.querySelector(
    "#prisijungimoSlaptazodis"
  );
  let klaiduZinutesDiv = document.querySelector("#klaiduZinutes");
  let sekmingasPrisijungimasDiv = document.querySelector("#sekmingasPrisijungimas");

  let prisijungimoVardas = prisijungimoVardoIvestis.value;
  let prisijungimoSlaptazodis = prisijungimoSlaptazodzioIvestis.value;

  let klaidos = [];

  if (
    loginName !== prisijungimoVardas ||
    password !== prisijungimoSlaptazodis
  ) {
    klaidos.push("Neteisingas prisijungimo vardas arba slaptažodis.");
  }

  if (!/[0-9]/.test(prisijungimoSlaptazodzioIvestis.value)) {
    klaidos.push("Slaptažodyje turi būti bent vienas skaičius!");
  }
  if (prisijungimoSlaptazodis.length < 8 || prisijungimoSlaptazodis.length > 28 ) {
    klaidos.push("Slaptažodis turi buti ne trumpesnis nei 8 simboliai ir ne ilgesnis nei 28 simboliai!");
  }

  if (!/[A-Z]/.test(prisijungimoSlaptazodzioIvestis.value)) {
    klaidos.push("Slaptažodyje turi būti bent viena didžioji raidė!");
  }

  if (!/[a-z]/.test(prisijungimoSlaptazodzioIvestis.value)) {
    klaidos.push("Slaptažodyje turi būti bent viena mažoji raidė!");
  }

  if (
    !/[$&+,:;=?@#|'<>.-^*()%!"]/.test(prisijungimoSlaptazodzioIvestis.value)
  ) {
    klaidos.push("Slaptažodyje turi būti bent vienas specialus simbolis!");
  }

  if (klaidos.length > 0) {
    klaiduZinutesDiv.innerHTML = "<p>" + klaidos.join("</p><p>") + "</p>";
    sekmingasPrisijungimasDiv.innerHTML = '';
  } else {
    klaiduZinutesDiv.innerHTML = "";
    sekmingasPrisijungimasDiv.innerHTML = "<p>Prisijungėte sėkmingai.</p>";

  }
}
