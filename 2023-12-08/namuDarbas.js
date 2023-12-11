function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateArrayOfString = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    let atsitiktineRaide = String.fromCharCode(rand(65, 68));
    arr.push(atsitiktineRaide);
  }
  return arr;
};

const charactersArray = generateArrayOfString(200);
console.log(charactersArray);

charactersArray.sort();
console.log(charactersArray);

const arr1 = generateArrayOfString(200),
  arr2 = generateArrayOfString(200),
  arr3 = generateArrayOfString(200);
(sumArray = []), (uniqueValues = []);
superUniqueValues = [];

for (let index in arr1) {
  sumArray[index] = arr1[index] + arr2[index] + arr3[index];
}

console.log(sumArray);

for (const value of sumArray) {
  if (!uniqueValues.includes(value)) {
    uniqueValues.push(value);
  }
}

console.log(uniqueValues);

let superUniqueCombinations = 0;
for (let value of sumArray) {
  let countOfThisCombination = 0;
  for (let value2 of sumArray) if (value === value2) countOfThisCombination++;

  if (countOfThisCombination === 1) {
    superUniqueCombinations++;
    superUniqueValues.push(value);
  }
}
console.log(superUniqueValues.join(", "));
console.log("Is viso unikaliu reiksmiu:" + superUniqueValues.length);

function generateUniqueArray(length, min, max) {
  const arr = [];
  while (arr.length < length) {
    let randomNumber = rand(min, max);
    if (!arr.includes(randomNumber)) arr.push(randomNumber);
  }
  return arr;
}

const array1 = generateUniqueArray(100, 100, 999),
  array2 = generateUniqueArray(100, 100, 999);

console.log(`Masyvas 1:`);
console.log(array1);
console.log(`Masyvas 2:`);
console.log(array2);

const fifhArray = [];

for (let index in arr1) {
  if (arr1[index] !== arr2[index]) {
    fifhArray.push(arr1[index]);
  }
}

console.log(fifhArray);


