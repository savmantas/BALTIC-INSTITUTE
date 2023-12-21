function add(a, b) {
  return a + b;
}
console.log(add(5, 6));

function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(6));

function greet(name) {
  console.log(`Labas ${name}`);
}

greet("Mantas");

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

const factorial2 = factorial(5);
console.log(factorial2);

function prasuktiCikla(kartai) {
  if (kartai > 0) {
    console.log("Veiksmas nr: " + kartai);
    prasuktiCikla(kartai - 1);
  }
}

prasuktiCikla(5);

function celsiusToFarenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFarenheit(25));

function getMaxNumber(array) {
  return Math.max(...array);
}

console.log(getMaxNumber([5, 15, 120, 100, 14]));

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + min + 1)) + min;
}

console.log(getRandomNumber(0, 10));

function getUniqueValue(arr) {
  return [...new Set(arr)];
}

console.log(getUniqueValue([1, 1, 5, 25, 5, 5, 2, 3, 9, 7]));

const array = [1, 2, 3, 4, 5];
function squereValues(arr) {
  return arr.map((number) => number * number);
}
const news = squereValues(array);
console.log(news);
console.log(array);

const asas = squereValues(news);
console.log(asas);

function sumazintiMasyva(arr, start, end) {
  return arr.slice(start, end);
}

const sliced = sumazintiMasyva([1, 5, 7, 8, 4, 7, 1, 4, 1], 2, 4);
console.log(sliced);

