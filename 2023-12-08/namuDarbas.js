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

masyvas.sort(function(a, b) {

    return a.localeCompare(b);
});

console.log('Masyvas pagal abecele:', masyvas);