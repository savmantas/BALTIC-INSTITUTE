document.addEventListener("DOMContentLoaded", function () {
  const height = document.querySelector(".height"),
    weight = document.querySelector(".weight"),
    calculate = document.querySelector(".btn"),
    result = document.querySelector(".result"),
    reset = document.querySelector(".reset");

  calculate.addEventListener("click", calBMI);
  reset.addEventListener("click", resetValues);
  function calBMI(e) {
    e.preventDefault();
    let heightValue = height.value;
    let weightValue = weight.value;

    if (heightValue === "" || isNaN(heightValue)) {
      return (result.innerHTML = "Provide a valid height");
    } else if (weightValue === "" || isNaN(weightValue)) {
      return (result.innerHTML = "Provide a valid weight");
    } else {
      let heightInMeters = heightValue / 100;
      let bmi = (weightValue / Math.pow(heightInMeters, 2)).toFixed(2);

      if (bmi < 18.5) {
        showResults(`Underweight: <span>${bmi}</span>`, "orange");
      }
      if (bmi > 18.5 && bmi < 25) {
        showResults(`Normal: <span>${bmi}</span>`, "green");
      }
      if (bmi > 25 && bmi < 30) {
        showResults(`Overweight: <span>${bmi}</span>`, "yellow");
      }
      if (bmi > 30) {
        showResults(`Obese: <span>${bmi}</span>`, "red");
      }
    }
  }

  function showResults(value, color) {
    result.style.backgroundColor = color;
    return (result.innerHTML = value);
  }
  function resetValues() {
    height.value = "";
    weight.value = "";
    result.innerHTML = "";
    result.style.backgroundColor = "";


    reset.style.display = "none";
  }
  height.addEventListener("input", showResetButton);
  weight.addEventListener("input", showResetButton);

  function showResetButton() {
   
    reset.style.display = "block";
  }
});
