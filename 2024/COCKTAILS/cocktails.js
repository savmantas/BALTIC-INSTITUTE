let isModalOpen = false;
const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
  categorySelectElement = document.querySelector("#category-select"),
  glassSelectElement = document.querySelector("#glass-type-select"),
  ingredientSelectElement = document.querySelector("#ingredient-select"),
  dynamicDrinksElement = document.querySelector(".drinks"),
  buttonSearch = document.querySelector("#search"),
  alphabetLinksElement = document.querySelector("#alphabet-links");

const modal = document.querySelector(".modal-bg");
const selectValues = {},
  drinksArray = [];

function displayFilteredDrinks(filteredDrinks) {
  dynamicDrinksElement.innerHTML = "";
  generateDrinksHTML(filteredDrinks);
}

function generateAlphabetLinks() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let buttonsHTML = "";
  for (let letter of alphabet) {
    buttonsHTML += `<button href="#" onclick="filterByLetter('${letter}')">${letter}</button>`;
  }
  alphabetLinksElement.innerHTML = buttonsHTML;
}

async function fillSelectElements() {
  const allUrls = [
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a",
  ];

  const allPromises = allUrls.map((url) =>
    fetch(url).then((response) => response.json())
  );

  const allValues = await Promise.all(allPromises);
  const [allCategories, allGlasses, allIngredients] = allValues;

  selectValues.categories = allCategories.drinks.map(
    (categoryObj) => categoryObj.strCategory
  );
  selectValues.glasses = allGlasses.drinks.map((glass) => glass.strGlass);
  selectValues.ingredients = allIngredients.drinks.map(
    (ingredient) => ingredient.strIngredient1
  );

  fillCategorySelect(
    allCategories.drinks,
    categorySelectElement,
    "strCategory"
  );

  fillCategorySelect(allGlasses.drinks, glassSelectElement, "strGlass");

  fillCategorySelect(
    allIngredients.drinks,
    ingredientSelectElement,
    "strIngredient1"
  );

  generateAlphabetLinks();
}

function fillCategorySelect(properties, selectElement, strFieldName) {
  let dynamicHTML = "";
  for (const property of properties) {
    dynamicHTML += `<option>${property[strFieldName]}</option>`;
  }
  selectElement.innerHTML += dynamicHTML;
}

async function getAllDrinks() {
  const storedDrinks = getFromLocalStorage("drinksArray");

  if (storedDrinks) {
    drinksArray.push(...storedDrinks);
  } else {
    const categoryDrinksUrls = selectValues.categories.map(
      (category) =>
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
          " ",
          "_"
        )}`
    );

    const allPromises = categoryDrinksUrls.map((url) =>
      fetch(url).then((response) => response.json())
    );

    const allValues = await Promise.all(allPromises);
    allValues.forEach((value) => drinksArray.push(...value.drinks));

    saveToLocalStorage("drinksArray", drinksArray);
  }
}

function generateDrinksHTML(drinks) {
  dynamicDrinksElement.innerHTML = "";

  for (let drink of drinks) {
    const drinkElement = document.createElement("div");
    drinkElement.classList.add("drink");
    drinkElement.setAttribute("data-idDrink", drink.idDrink);

    drinkElement.innerHTML = `
      <img src="${drink.strDrinkThumb}" alt="" />
      <h2 class="drink-title">${drink.strDrink}</h2>
    `;

    drinkElement.addEventListener("click", () => openModal(drink.idDrink));

    dynamicDrinksElement.appendChild(drinkElement);
  }
}

async function filter() {
  const searchValue = coctailNameFilterElement.value,
    category = categorySelectElement.value,
    glass = glassSelectElement.value,
    ingredient = ingredientSelectElement.value;

  let filteredArray = [...drinksArray];

  if (searchValue) {
    filteredArray = filteredArray.filter((drinkObj) =>
      drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  if (category !== "Choose Category") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
        " ",
        "_"
      )}`
    );
    const drinksOfCategory = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      drinksOfCategory.drinks.some(
        (drinkOfCategory) => drink.idDrink === drinkOfCategory.idDrink
      )
    );
  }

  if (glass !== "Choose Glass Type") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replaceAll(
        " ",
        "_"
      )}`
    );
    const drinksOfGlass = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      drinksOfGlass.drinks.some(
        (drinkOfGlass) => drink.idDrink === drinkOfGlass.idDrink
      )
    );
  }

  if (ingredient !== "Choose Ingredient") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.replaceAll(
        " ",
        "_"
      )}`
    );
    const drinksOfIngredient = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      drinksOfIngredient.drinks.some(
        (drinkOfIngredient) => drink.idDrink === drinkOfIngredient.idDrink
      )
    );
  }

  generateDrinksHTML(filteredArray);
  saveToLocalStorage("filteredDrinks", filteredArray);
}

async function initialization() {
  await fillSelectElements();
  await getAllDrinks();

  buttonSearch.addEventListener("click", filter);
  coctailNameFilterElement.addEventListener("input", filter);

  document
    .querySelector("#im-lucky")
    .addEventListener("click", displayRandomDrink);

  const storedFilteredDrinks = getFromLocalStorage("filteredDrinks");
  if (storedFilteredDrinks) {
    generateDrinksHTML(storedFilteredDrinks);
  } else {
    generateDrinksHTML(drinksArray);
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

async function openModal(id) {
  try {
    if (isModalOpen) {
      await closeModal();
    }

    modal.style.display = "flex";
    isModalOpen = true;

    await clearModalContent();

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    const drink = data.drinks[0];

    if (drink) {
      document.querySelector(".modal-img").src = drink.strDrinkThumb;
      document.querySelector(".modal-title").innerText = drink.strDrink;
      document.querySelector(
        "#modal-category"
      ).innerText = `${drink.strCategory}`;
      document.querySelector(
        "#modal-alcohol"
      ).innerText = `${drink.strAlcoholic}`;
      document.querySelector("#modal-glass").innerText = `${drink.strGlass}`;

      const ingredientsContainer = document.querySelector("#modal-ingredients");
      for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];
        if (ingredient && measure) {
          const ingredientElement = document.createElement("p");
          ingredientElement.classList.add("ingredient");
          ingredientElement.innerHTML = `<b>${ingredient}:</b> <span>${measure}</span>`;
          ingredientsContainer.appendChild(ingredientElement);
        }
      }
      document.querySelector(
        "#modal-recipe"
      ).innerText = `${drink.strInstructions}`;
    } else {
      await closeModal();
    }
  } catch (error) {
    await closeModal();
  }
}

async function clearModalContent() {
  return new Promise((resolve) => {
    document.querySelector(".modal-img").src = "";
    document.querySelector(".modal-title").innerText = "";
    document.querySelector("#modal-category").innerText = "";
    document.querySelector("#modal-alcohol").innerText = "";
    document.querySelector("#modal-glass").innerText = "";
    document.querySelector("#modal-ingredients").innerHTML = "";
    document.querySelector("#modal-recipe").innerText = "";
    setTimeout(resolve, 0);
  });
}

async function closeModal() {
  modal.style.display = "none";
  isModalOpen = false;
}

async function displayRandomDrink() {
  const randomDrinkUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const response = await fetch(randomDrinkUrl);
  const data = await response.json();
  const randomDrink = data.drinks[0];

  openModal(randomDrink.idDrink);
}

function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

async function filterByLetter(letter) {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const data = await response.json();
    const drinksStartingWithLetter = data.drinks;
    generateDrinksHTML(drinksStartingWithLetter);
    saveToLocalStorage("filteredDrinks", drinksStartingWithLetter);
  } catch (error) {
    console.error("Error filtering drinks by letter:", error);
  }
}

initialization();
