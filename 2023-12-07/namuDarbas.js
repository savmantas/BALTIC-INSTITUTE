function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let zvaigzdute = "";
for (let i = 0; i < 400; i++) {
  zvaigzdute += "*";
}
document.write(`<div>${zvaigzdute}</div>`);
document.write('---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');

zvaigzdute = "";
for (let i = 0; i < 400; i++) {
  zvaigzdute += "*";
  if ((i + 1) % 50 === 0 && i !== 399) {
    zvaigzdute += "<br>";
  }
}

document.write(`<div>${zvaigzdute}</div>`);
