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
    `Sugeneruotas skaicius ${sk}. Tracia kategorija. Sugeneruotas skaicius + 10 = ${rez}.`
  );
} else if (sk >= 31 && sk <= 45 && sk % 2 !== 0) {
  let rez = 100 - sk;
  console.log(
    `Sugeneruotas skaicius ${sk}. Ketvirta kategorija. 100 - sugeneruotas skaicius = ${rez}.`
  );
}
else if (sk >= 46 && sk <= 99 && sk === 47) {

let rez = sk / 4;
console.log(
    `Sugeneruotas skaicius ${sk}. Penkta kategorija. Sugeneruotas skaicius / 4 = ${rez}.`
  );
}
else {
    console.log(`Skaicius nepatenka i kategorijas!`)
}
