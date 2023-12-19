
let editMode = false;
let currentProduct;
const dynamicDataElement = document.getElementById("dynamic-data"),
  titleInputElement = document.getElementById("title"),
  priceInputElement = document.getElementById("price"),
  stockInputElement = document.getElementById("stock"),
  brandInputElement = document.getElementById("brand"),
  categoryInputElement = document.getElementById("category"),
  submitButtonElement = document.getElementById("submit");
const getTableContents = () => {
  let dynamicHTML = ``;
  for (const product of products) {
    dynamicHTML += `<tr>
						<td>${product.id}</td>
						<td>${product.title}</td>
						<td>${product.price}</td>
						<td>${product.stock}</td>
						<td>${product.brand}</td>
						<td>${product.category}</td>
                        <td>
                            <button
                            class="btn btn-danger" onclick="deleteProduct(${product.id})">Ištrinti</button>
                        </td>
                        <td>
                            <button
                            class="btn btn-success" onclick="setEdit(${product.id})">Atnaujinti</button>
                        </td>
					</tr>`;
  }
  dynamicDataElement.innerHTML = dynamicHTML;
};
getTableContents();
const createNewRecord = (event) => {
  event.preventDefault();
  const newProduct = {
    id: products[products.length - 1].id + 1,
    title: titleInputElement.value,
    price: priceInputElement.value,
    stock: stockInputElement.value,
    brand: brandInputElement.value,
    category: categoryInputElement.value,
  };
  products.push(newProduct);
  getTableContents();
};
submitButtonElement.onclick = createNewRecord;
const deleteProduct = (id) => {
  let elementIndex = products.findIndex((value) => value.id === id);
  products.splice(elementIndex, 1);
  getTableContents();
};
const updateProduct = (event) => {
  event.preventDefault();
  products[currentProduct].title = titleInputElement.value;
  products[currentProduct].price = priceInputElement.value;
  products[currentProduct].stock = stockInputElement.value;
  products[currentProduct].brand = brandInputElement.value;
  products[currentProduct].category = categoryInputElement.value;
  getTableContents();
  currentProduct = undefined;
  editMode = false;
  submitButtonElement.onclick = createNewRecord;
  submitButtonElement.innerText = "Submit";
  submitButtonElement.classList.remove("btn-success");
  submitButtonElement.classList.add("btn-primary");
  titleInputElement.value = "";
  priceInputElement.value = "";
  stockInputElement.value = "";
  brandInputElement.value = "";
  categoryInputElement.value = "";
};
const setEdit = (id) => {
  let elementIndex = products.findIndex((value) => value.id === id);
  const product = products[elementIndex];
  titleInputElement.value = product.title;
  priceInputElement.value = product.price;
  stockInputElement.value = product.stock;
  brandInputElement.value = product.brand;
  categoryInputElement.value = product.category;
  submitButtonElement.innerText = "Update";
  submitButtonElement.classList.add("btn-success");
  submitButtonElement.classList.remove("btn-primary");
  submitButtonElement.onclick = updateProduct;
  currentProduct = elementIndex;
  editMode = true;
};

const filterProducts = () => {
  const titleFilter = document
    .getElementById("filterTitle")
    .value.toLowerCase();
  const priceFromFilter =
    parseFloat(document.getElementById("filterPriceFrom").value) || 0;
  const priceToFilter =
    parseFloat(document.getElementById("filterPriceTo").value) ||
    Number.MAX_VALUE;
  const brandFilter = document
    .getElementById("filterBrand")
    .value.toLowerCase();
  const categoryFilter = document
    .getElementById("filterCategory")
    .value.toLowerCase();
  const filteredProducts = products.filter((product) => {
    const titleMatch = product.title.toLowerCase().includes(titleFilter);
    const priceMatch =
      product.price >= priceFromFilter && product.price <= priceToFilter;
    const brandMatch = product.brand.toLowerCase().includes(brandFilter);
    const categoryMatch =
      categoryFilter === "" ||
      product.category.toLowerCase() === categoryFilter;

    return titleMatch && priceMatch && brandMatch && categoryMatch;
  });
  updateTable(filteredProducts);
};
document
  .getElementById("filterTitle")
  .addEventListener("input", filterProducts);
document
  .getElementById("filterPriceFrom")
  .addEventListener("input", filterProducts);
document
  .getElementById("filterPriceTo")
  .addEventListener("input", filterProducts);
document
  .getElementById("filterBrand")
  .addEventListener("input", filterProducts);
document
  .getElementById("filterCategory")
  .addEventListener("change", filterProducts);
const updateTable = (filteredProducts) => {
  let dynamicHTML = ``;
  for (const product of filteredProducts) {
    dynamicHTML += `<tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.brand}</td>
            <td>${product.category}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Ištrinti</button>
            </td>
            <td>
                <button class="btn btn-success" onclick="setEdit(${product.id})">Atnaujinti</button>
            </td>
        </tr>`;
  }
  document.getElementById("dynamic-data").innerHTML = dynamicHTML;
};

