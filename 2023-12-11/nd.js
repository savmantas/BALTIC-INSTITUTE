function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generateRandomNumbersArray = (length, min, max) => {
    const arr = [];
    for (let i = 0; i < length; i++) arr.push(rand(min, max));
    return arr;
  };

  const generateString = (length) => {
    let str = "";
    for (let i = 0; i < length; i++) {
      str += String.fromCharCode(rand(65, 90));
    }
    return str;
  };

  const stringArray = [];
  for (let i = 0; i < 100; i++) {
    stringArray.push(generateString(4));
  }
  console.log(stringArray);

  stringArray.sort();
  console.log(stringArray);

  stringArray.sort().reverse();
  console.log(stringArray);

  const numbersArray = generateRandomNumbersArray(100, -100, 200);
  console.log(numbersArray);

  if (numbersArray.includes(68)) {
    console.log(`68 egzistuoja numbersArray masyve`);
  } else {
    console.log(`68 nera numbersArray masyve`);
  }

  numbersArray.sort((num1, num2) => {
    return num1 - num2;
  });
  console.log(numbersArray);

  numbersArray.reverse();
  console.log(numbersArray);

  let max = -1000,
    min = 1000;

  for (let value of numbersArray) {
    if (value > max) {
      max = value;
    }
    if (value < min) {
      min = value;
    }
  }
  console.log(`minimali masyvo reiksme: ${min}`);
  console.log(`maksimali masyvo reiksme: ${max}`);


  
