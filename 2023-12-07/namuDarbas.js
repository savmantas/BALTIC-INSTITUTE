function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let zvaigzdute = "";
for (let i = 0; i < 400; i++) {
  zvaigzdute += "*";
}
document.write(`<div>${zvaigzdute}</div>`);
document.write(
  "------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);

zvaigzdute = "";
for (let i = 0; i < 400; i++) {
  zvaigzdute += "*";
  if ((i + 1) % 50 === 0) {
    zvaigzdute += "<br>";
  }
}

document.write(`<div>${zvaigzdute}</div>`);

let atsitiktinisSkaicius = rand(1, 6);
document.write(
  `<h3>Skaicius ${atsitiktinisSkaicius}. Rezultatas: < h3 > ${atsitiktinisSkaicius} < /h3 > </h3>`
);
//--------------------------------skaiciu spalvos??????-------------------------------------
let skaicius = [rand(-10, 10), rand(-10, 10), rand(-10, 10)];

function nustatytiSpalva(skaicius) {
  if (skaicius < 0) {
    return "green";
  } else if (skaicius === 0) {
    return "red";
  } else {
    return "blue";

}
}
document.write(skaicius);

