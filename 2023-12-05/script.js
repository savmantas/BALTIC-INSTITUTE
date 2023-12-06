function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr1 = [];

for (let index = 0; index < 20; index++) {
  arr1.push(index);
}
console.log(
  "--------------------------------- Pirma uzduotis. --------------------"
);
console.log("a:");

console.log(arr1);

console.log("b:");

let arr2 = [];
for (let index = 1; index < 21; index++) {
  arr2.push(index);
}
console.log(arr2);

console.log("c:");

let arr3 = [];
for (let index = 0; index < 20; index++) {
  arr3.push(index);
}
arr3.reverse();
console.log(arr3);

console.log("d:");

let arr4 = [];
for (let index = 20; index < 40; index++) {
  arr4.push(index);
}
console.log(arr4);

console.log("e:");

let arr5 = [];
for (let index = 30; index < 50; index++) {
  arr5.push(index);
}
arr5.reverse();
console.log(arr5);

console.log("f:");

let arr6 = [];
for (let index = 0; index < 20; index++) {
  let randomSkaicius = rand(0, 10);
  arr6.push(randomSkaicius);
}
console.log(arr6);

console.log(
  "-------------------------------- Antra uzduotis. ------------------------"
);

let arr7 = [];
for (let index = 0; index < 10; index++) {
  let randomSkaicius = rand(0, 10);
  arr7.push(randomSkaicius);
}

console.log(arr7.join(" -> "));

console.log(
  "------------------------------- Trecia uzduotis. -------------------------"
);

console.log("a:  f masyvas pasalinus lyginius skaicius:");
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (arr6[index] % 2 === 0) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log("b:  f masyvas pasalinus nelyginius skaicius:");
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (arr6[index] % 2 === 1) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log("c:  f masyvas be skaiciu kurie dalinasi is 3:");
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (arr6[index] % 3 === 0) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log("d:  f masyvas be skaiciu kurie yra lygus savo indeksui:");
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (index === arr6[index]) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log(
  "e:  f masyvas be skaiciu kurie yra mazesni uz 5 arba didesni uz 8:"
);
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (arr6[index] < 5 || arr6[index] > 8) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log("f:  f masyvas be skaiciu kurie yra nuo 2 iki 5:");
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
for (let index = 0; index < arr6.length; index++) {
  if (arr6[index] >= 2 && arr6[index] <= 5) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log(
  "g:  f masyvas be skaiciu kuriu suma su sekanciu elementu masyve yra dvizenkle:"
);
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
console.log(arr6);
for (let index = 0; index < arr6.length; index++) {
  let nextElement;

  if (arr6.length - 1 === index) {
    nextElement = arr6[0];
  } else {
    nextElement = arr6[index + 1];
  }

  if (arr6[index] + nextElement >= 10) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);

console.log(
  "g:  f masyvas be skaiciu kuriu suma su sekanciu elementu masyve yra lygine:"
);
arr6 = [];
for (let index = 0; index < 20; index++) {
  arr6.push(rand(0, 10));
}
console.log(arr6);
for (let index = 0; index < arr6.length; index++) {
  let nextElement;

  if (arr6.length - 1 === index) {
    nextElement = arr6[0];
  } else {
    nextElement = arr6[index + 1];
  }

  if ((arr6[index] + nextElement) % 2 === 0) {
    arr6.splice(index, 1);
    index--;
  }
}
console.log(arr6);
