function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function categoryOneCalculation(skaicius){
  let rez = skaicius **2;
  return rez;
}

let sk = rand(0,99)
if (sk<=10){
  console.log(`Skaicius: ${sk}, Kategorija: 1, Rezultatas ${categoryOneCalculation(sk)}`);
}