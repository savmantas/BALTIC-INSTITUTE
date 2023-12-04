function calc() {
  let skaicius1 = parseInt(document.getElementById("skaicius1").value);
  let skaicius2 = parseInt(document.getElementById("skaicius2").value);
  let operacijos = document.getElementById("operacijos").value;

  if (operacijos === "+") {
    document.getElementById("rezultatas").value = skaicius1 + skaicius2;
  }
  if (operacijos === "-") {
    document.getElementById("rezultatas").value = skaicius1 - skaicius2;
  }
  if (operacijos === "x") {
    document.getElementById("rezultatas").value = skaicius1 * skaicius2;
  }
  if (operacijos === "/") {
    document.getElementById("rezultatas").value = skaicius1 / skaicius2;
  }
  if (operacijos === "x²") {
    document.getElementById("rezultatas").value = skaicius1 ** skaicius2;
  }
  if (operacijos === "/" && skaicius2 === 0) {
    document.getElementById("rezultatas").value = "VEIKSMAS NEGALIMAS";
  }
 if(isNaN(skaicius1) || isNaN(skaicius2)) {
    document.getElementById("rezultatas").value = "NEĮVESTAS SKAIČIUS!";
}
}

