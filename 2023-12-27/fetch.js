document.addEventListener("DOMContentLoaded", function () {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((atsakymas) => atsakymas.json())
    .then((info) => {
      const breedsSelect = document.getElementById("breeds");
      const breeds = Object.keys(info.message);
      breeds.forEach((breed) => {
        const option = document.createElement("option");
        option.value = breed;
        option.textContent = breed;
        breedsSelect.appendChild(option);
      });
      image();
    });
  window.image = function () {
    const Breed = document.getElementById("breeds").value;
    const dogImage = document.getElementById("dogImage");
    fetch(`https://dog.ceo/api/breed/${Breed}/images/random`)
      .then((atsakymas) => atsakymas.json())
      .then((info) => {
        const img = document.createElement("img");
        img.src = info.message;
        dogImage.innerHTML = "";
        dogImage.appendChild(img);
        selected.textContent = `${Breed.toUpperCase()}`;

      });
  };
});
