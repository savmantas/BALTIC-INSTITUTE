const people = [];
let currentNumeration = 1;

const buttonElement = document.querySelector("#add-button");

buttonElement.addEventListener("click", () => {
  const person = {};

  person.firstName = document.getElementById("firstNameInput").value;
  person.lastName = document.getElementById("lastNameInput").value;
  person.age = document.getElementById("ageInput").value;
  person.nationality = document.getElementById("nationalityInput").value;
  person.number = currentNumeration;

  people.push(person);

  currentNumeration++;

  generateTableContent(people);
});
removeButton.addEventListener("click", () => {
    const removeNumber = parseInt(document.getElementById("removeNumberInput").value);

    const indexToRemove = people.findIndex(person => person.number === removeNumber);

    if (indexToRemove !== -1) {
      people.splice(indexToRemove, 1);
      generateTableContent(people);
    } else {
      alert('Person with the specified number does not exist.');
    }
  });
function generateTableContent(people) {
  let dynamicHTML = ``;

  for (let person of people) {
    dynamicHTML += `<tr>
        <td>${person.number}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>
        </tr>`;
  }

  const tbody = document.querySelector("table tbody");

  tbody.innerHTML = dynamicHTML;
}
