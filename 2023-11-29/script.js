function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let eilute = "Once upon a time in hollywood";
let mazosiosRaides = eilute.toLowerCase();
let pakeistosRaides = mazosiosRaides.replaceAll("o", "*");
console.log(pakeistosRaides);


let skaiciusA = rand(0,2), skaiciusB = rand(0,2), skaiciusC = rand(0,2), skaiciusD = rand(0,2);
console.log(skaiciusA, skaiciusB, skaiciusC, skaiciusD);



let raideA = rand(97, 120), raideB = rand(97, 120), raideC = rand(97, 120);
console.log (String.fromCharCode(raideA," ", raideB," ", raideC));


let aktoriausVardas = "Liam", aktoriausPavarde= "Neeson";
let inicialai = aktoriausVardas[0] + " " + aktoriausPavarde[0];
console.log(inicialai);


