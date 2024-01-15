const people = [];
let currentNumeration = 1;

const addButtonElement = document.querySelector("#add-button");
addButtonElement.addEventListener("click", () => {
  const person = {};
  person.firstName = document.getElementById("firstNameInput").value;
  person.lastName = document.getElementById("lastNameInput").value;
  person.age = document.getElementById("ageInput").value;
  person.nationality = document.getElementById("nationalityInput").value;
  person.number = currentNumeration;
  currentNumeration++;
  people.push(person);
  generateTableContent(people);
});

const deleteButtonElement = document.querySelector("#delete-button");
deleteButtonElement.addEventListener("click", () => {
  const person = {};
  person.firstName =''
  person.lastName =''
  person.age =''
  person.nationality =''
  person.number = currentNumeration;
  currentNumeration++;
  people.push(person);
  generateTableContent(people);
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

function updateTableContent(people) {
  person.firstName = document.getElementById("firstNameInput").value;
  person.lastName = document.getElementById("lastNameInput").value;
  person.age = document.getElementById("ageInput").value;
  person.nationality = document.getElementById("nationalityInput").value;
}
