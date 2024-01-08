function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr1 = [];

for (let index = 0; index < 20; index++) {
  arr1.push(index);
}
console.log(
  "Pirma uzduotis. Sukurkite masyvą iš 20 elementų. a :Kurių reikšmės: 0, 1, 2 …, 18 ,19; b: Kurių reikšmės: 1,2 3, … ,19, 20; c: Kurių reikšmės: 19, 18 … 2, 1, 0; d: Kurių reikšmės: 20, 21, 22…. 38, 39; e: Kurių reikšmės: 49, 48, 47…. 31, 30; f: Su atsitiktinėmis reikšmėmis nuo 0 iki 10."
);
console.log("a:");

console.log(arr1);

console.log("b:");

let arr2 = [];
for (let index = 1; index < 21; index++) {
  arr2.push(index);
}
console.log(arr2);

console.log("c:");

let arr3 = [];
for (let index = 0; index < 20; index++) {
  arr3.push(index);
}
arr3.reverse();
console.log(arr3);

console.log("d:");

let arr4 = [];
for (let index = 20; index < 40; index++) {
  arr4.push(index);
}
console.log(arr4);

console.log("e:");

let arr5 = [];
for (let index = 30; index < 50; index++) {
  arr5.push(index);
}
arr5.reverse();
console.log(arr5);

console.log("f:");

let arr6 = [];
for (let index = 0; index < 20; index++) {
  let randomSkaicius = rand(0, 10);
  arr6.push(randomSkaicius);
}
console.log(arr6);

console.log(
  "Antra uzduotis. Pasinaudokite join funkcija ir atspausdinkite vieno iš ankščiau sukurtų masyvų reikšmes tokia tvarka (pvz masyvas a) 0 -> 1 -> 2…. -> 18 -> 19."
);

let arr7 = [];
for (let index = 0; index < 10; index++) {
  let randomSkaicius = rand(0, 10);
  arr7.push(randomSkaicius);
}

console.log(arr7.join(" -> "));

console.log(
  "Trecia uzduotis. iš f masyvo ištrinkite elementus kurie: a: Yra lyginiai; b: Nelyginiai; c: Dalinasi iš 3; d: Yra lygūs savo indeksui; e: Yra mažesni nei 5 arba didesni nei 8; f: Yra  nuo 2 iki 5; g: kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą) h: kurių suma su sekančiu elementu masyve yra lyginė"
);

console.log("a:  f masyvas pasalinus lyginius skaicius:");
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (arr6[index] % 2 === 0) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log("b:  f masyvas pasalinus nelyginius skaicius:");
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (arr6[index] % 2 === 1) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log("c:  f masyvas be skaiciu kurie dalinasi is 3:");
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (arr6[index] % 3 === 0) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log("d:  f masyvas be skaiciu kurie yra lygus savo indeksui:");
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (index === arr6[index]) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log(
  "e:  f masyvas be skaiciu kurie yra mazesni uz 5 arba didesni uz 8:"
);
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (arr6[index] < 5 || arr6[index] > 8) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log("f:  f masyvas be skaiciu kurie yra nuo 2 iki 5:");
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (arr6[index] >= 2 && arr6[index] <= 5) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log(
  "g:  f masyvas be skaiciu kuriu suma su sekanciu elementu masyve yra dvizenkle:"
);
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
console.log(arr6);
for (let index = 0; index < arr6.length; index++) {
  let nextElement;

  if (arr6.length - 1 === index) {
    nextElement = arr6[0];
  } else {
    nextElement = arr6[index + 1];
  }

  if (arr6[index] + nextElement >= 10) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log(
  "g:  f masyvas be skaiciu kuriu suma su sekanciu elementu masyve yra lygine:"
);
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
console.log(arr6);
for (let index = 0; index < arr6.length; index++) {
  let nextElement;

  if (arr6.length - 1 === index) {
    nextElement = arr6[0];
  } else {
    nextElement = arr6[index + 1];
  }

  if ((arr6[index] + nextElement) % 2 === 0) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log(
  "Ketvirta uzduotis. Sukurkite atsitiktinio stringo iš 15 lotyniškų mažųjų raidžių generavimo algoritmą. Pasinaudokite String.fromCharCode(skaicius) funkcija, kad sugeneruoti atsitiktinę raidę."
);
function generuotiStringa() {
  let stringas = "";
  for (let i = 0; i < 15; i++) {
    let raide = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    stringas += raide;
  }
  return stringas;
}
let stringas = generuotiStringa();
console.log(
  "                   Sugeneruotas atsitiktinis stringas: " + stringas
);

console.log(
  "Penkta uzduotis. Sukurti masyvą iš 100 atsitiktinių skaičių. Prieš pridėdami elementą prie masyvo patikrinkite  ar skaičius yra nuo 40 iki 60. Jei taip, jo nepridėkite prie masyvo. Galiausiai masyvas turi turėti 100 elementų."
);

function generuotiSkaicius() {
  let skaiciai = [];
  while (skaiciai.length < 100) {
    let skaicius = Math.floor(Math.random() * 100) + 1;
    if (skaicius < 40 || skaicius > 60) {
      skaiciai.push(skaicius);
    }
    if (skaicius % 2 === 0) {
      document.write(`<green>${skaicius}</green>`);
    } else {
      document.write(`<red>${skaicius}</red>`);
    }
    document.write(" ");
  }
  console.log(skaiciai);
}
const skaiciai = generuotiSkaicius();
console.log(skaiciai);

console.log(
  "Sesta uzduotis.  Pasinaudojant document.write() funkcija išveskite lyginius 5 uždavinio masyvo skaičius su spalva - žalia, o nelyginius su spalva - raudona;"
);
