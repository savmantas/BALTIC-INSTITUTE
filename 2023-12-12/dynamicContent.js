const people = [
  {
    number: 1,
    firstName: "John",
    lastName: "Doe",
    age: 28,
    nationality: "British",
  },
  {
    number: 2,
    firstName: "Maria",
    lastName: "Gonzalez",
    age: 34,
    nationality: "Spanish",
  },
  {
    number: 3,
    firstName: "Amit",
    lastName: "Patel",
    age: 42,
    nationality: "Indian",
  },
  {
    number: 4,
    firstName: "Yasmin",
    lastName: "Al-Hariri",
    age: 26,
    nationality: "Lebanese",
  },
  {
    number: 5,
    firstName: "Chen",
    lastName: "Wang",
    age: 30,
    nationality: "Chinese",
  },
  {
    number: 6,
    firstName: "Adeola",
    lastName: "Oluwaseun",
    age: 36,
    nationality: "Nigerian",
  },
  {
    number: 7,
    firstName: "Irina",
    lastName: "Smirnov",
    age: 29,
    nationality: "Russian",
  },
  {
    number: 8,
    firstName: "Carlos",
    lastName: "Santos",
    age: 40,
    nationality: "Brazilian",
  },
  {
    number: 9,
    firstName: "Sarah",
    lastName: "Taylor",
    age: 31,
    nationality: "Canadian",
  },
  {
    number: 10,
    firstName: "Hiroshi",
    lastName: "Takahashi",
    age: 38,
    nationality: "Japanese",
  }
];
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
