function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let sk = rand(0, 99);

// Pirma kategorija. 0  - 10 - pakelti skaičių kvadratu ir atspausdinti.

if (sk >= 0 && sk <= 10) {
  let rez = sk ** 2;
  console.log(
    `Skaicius patenka i 1 kategorija. Skaicius: ${sk}.  pakeltas kvadratu: ${rez}.`
  );
}

// Antra kategorija. 11 - 19  - atspausdinti skaičių tokį koks jis yra.
else if (sk >= 11 && sk <= 19) {
  console.log(`Skaicius patenka i 2 kategorija. Skaicius: ${sk}.`);
}

// Trecia kategorija. 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti.
else if (sk >= 20 && sk <= 49 && sk % 2 === 0) {
  let desimtys = +sk.toString()[0];
  let rez1 = sk - desimtys;
  console.log(
    `Skaicius patenka i 3 kategorija. Skaicius: ${sk}.  Is skaiciaus atimtos desimtys: ${rez1}.`
  );
}

// Ketvirta kategorija. 20 - 49  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti.
else if (sk >= 20 && sk <= 49 && sk % 2 !== 0) {
  let vienetai = sk % 10;
  let rez2 = (vienetai + sk) / 2;
  console.log(
    `Skaicius patenka i 4 kategorija. Skaicius: ${sk}.  Skaiciaus vienetai prideti ir rezultatas padalintas is 2: ${rez2}.`
  );
}

// Penkta kategorija. >= 50 ir skaičius dalinasi iš 3 be liekanos: Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite. Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;
else if (sk >= 50 && sk % 3 === 0) {
  let sk1 = rand(97, 122),
    sk2 = rand(97, 122),
    sk3 = rand(97, 122),
    sk4 = rand(97, 122);
  let string =
    String.fromCharCode(sk1) +
    String.fromCharCode(sk2) +
    String.fromCharCode(sk3) +
    String.fromCharCode(sk4);
  console.log(
    `Skaicius patenka i 5 kategorija. Skaicius: ${sk}. Atsitiktinis stringas is 4 raidziu: ${string}.`
  );
} else console.log(`Skaicius nepatenka i jokia kategorija.`);
