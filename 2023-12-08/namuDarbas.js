let masyvas = new Array(200);
for (let i = 0; i < masyvas.length; i++) {
  let atsitiktineRaide = String.fromCharCode(
    65 + Math.floor(Math.random() * 4)
  );
  masyvas[i] = atsitiktineRaide;
}

let countA = masyvas.filter((raide) => raide === "A").length,
  countB = masyvas.filter((raide) => raide === "B").length,
  countC = masyvas.filter((raide) => raide === "C").length,
  countD = masyvas.filter((raide) => raide === "D").length;

console.log("A raides count: " + countA);
console.log("B raides count: " + countB);
console.log("C raides count: " + countC);
console.log("D raides count: " + countD);

masyvas.sort(function (a, b) {
  return a.localeCompare(b);
});

console.log("Masyvas pagal abecele:", masyvas);

function generuotiUnikaliusSkaicius(min, max, naudoti) {
  let skaicius;
  do {
    skaicius = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (naudoti.includes(skaicius));
  return skaicius;
}

let masyvas1 = [],
  masyvas2 = [];

for (let i = 0; i < 100; i++) {
  let unikalusSkaiciusMasyvo1 = generuotiUnikaliusSkaicius(100, 999, masyvas1);
  let unikalusSkaiciusMasyvo2 = generuotiUnikaliusSkaicius(100, 999, masyvas2);

  masyvas1.push(unikalusSkaiciusMasyvo1);
  masyvas2.push(unikalusSkaiciusMasyvo2);
}

console.log("Masyvas 1:", masyvas1);
console.log("Masyvas 2:", masyvas2);
