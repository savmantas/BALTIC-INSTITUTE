function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let sk = rand(0, 99);

// Pirma kategorija. 0  - 10 - pakelti skaičių kvadratu ir atspausdinti.

let rez = sk ** 2;
if (sk >= 0 && sk <= 10) {
  console.log(
    `Skaicius papuola i 1 kategorija. Skaicius: ${sk},  pakeltas kvadraru: ${rez}.`
  );
} else {
  console.log("Skaicius nepapuola i 1 kategorija!");
}

// Antra kategorija. 11 - 19  - atspausdinti skaičių tokį koks jis yra.
if (sk >= 11 && sk <= 19) {
  console.log(`Skaicius papuola i 2 kategorija. Skaicius: ${sk}.`);
} else {
  console.log("Skaicius nepapuola i 2 kategorija!");
}

// Trecia kategorija. 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti.

let desimtys = +sk.toString()[0];
let rez1 = sk - desimtys;
if (sk >= 20 && sk <= 49 && sk % 2 === 0) {
  console.log(
    `Skaicius papuola i 3 kategorija. Skaicius: ${sk}.  Is skaiciaus atimtos desimtys: ${rez1}.`
  );
} else {
  console.log("Skaicius nepapuola i 3 kategorija!");
}

// Ketvirta kategorija. 20 - 49  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti.
let vienetai = sk % 10;
let rez2 = (vienetai + sk) / 2;
if (sk >= 20 && sk <= 49 && sk % 2 !== 0) {
  console.log(
    `Skaicius papuola i 4 kategorija. Skaicius: ${sk}.  Skaiciaus vienetai prideti ir rezultatas padalintas is 2: ${rez2}.`
  );
} else {
  console.log("Skaicius nepapuola i 4 kategorija!");
}

// Penkta kategorija. >= 50 ir skaičius dalinasi iš 3 be liekanos: Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite. Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;

 if (sk >= 50 && sk % 3 === 0) {
	let sk1 = rand(97, 122),
		sk2 = rand(97, 122),
		sk3 = rand(97, 122),
		sk4 = rand(97, 122);
	let string =
		String.fromCharCode(sk1) +
		String.fromCharCode(sk2) +
		String.fromCharCode(sk3) +
		String.fromCharCode(sk4);
	console.log(`Skaicius papuola i 5 kategorija. Skaicius: ${sk}. Atsitiktinis stringas is 4 raidziu: ${string}.`);
} else {
	console.log(`Skaicius nepapuola i 5 kategorija!`);
}
