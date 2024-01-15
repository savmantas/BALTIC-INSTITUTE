function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function categoryOneCalculation(skaicius){

}








let sk = rand(0, 99);
console.log(sk);

if (sk >= 0 && sk <= 10) {
  let rez = sk ** 2;
  console.log(
    `Skaicius ${sk} patenka i pirma kategorija. Skaicius pakeltas kvadratu lygus ${rez}.`
  );
}


else if (sk <= 20) {
  console.log(`Skaicius ${sk} patenka i antra kategorija.`);
}



else if (sk >= 20 && sk < 50 && sk % 2 === 0) {
  let desimtys = sk.toString()[0];
  let rez = sk - desimtys;
  console.log(
    `Skaicius ${sk} patenka i trecia kategorija. Is skaiciaus atemus jo desimtis skaicius lygus ${rez}.`
  );
}


else if (sk >= 20 && sk < 50 && sk % 2 === 1) {
  let vienetai = sk%10;
  let rez = (sk + vienetai) / 2;
  console.log(
    `Skaicius ${sk} patenka i ketvirta kategorija. Prie skaiciaus pridejus jo vienetus ir rezultata padalinus is 2 gauname ${rez}.`
  );
}


else if (sk >= 50 && sk % 3 === 0) {

  console.log(
    `Skaicius ${sk} patenka i penkta kategorija.`
  );
}

else console.log(`Skaicius nepatenka nei i viena kategorija.`);
