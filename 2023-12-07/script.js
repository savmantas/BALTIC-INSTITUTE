function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateArrayOfRandomNumbers(min = 10, max, length = 10) {
    let arr =[];
    for (let i = 0; i < length; i++){
        arr.push(rand(min, max));
    }
return arr;

  }



  const arr = generateArrayOfRandomNumbers(1, 99, 20);
  console.log(arr);