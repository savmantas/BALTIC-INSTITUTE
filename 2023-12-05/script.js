function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr1 = [];

for (let index = 0; index < 20; index++) {
arr1.push(index);
}
console.log('Pirma uzduotis.');
console.log('a:');


console.log(arr1);


console.log('b:');


let arr2 = [];
for (let index = 1; index < 21; index++) {
arr2.push(index);
}
console.log(arr2);


console.log('c:');


let arr3 = [];
for (let index = 0; index < 20; index++) {
arr3.push(index);

}
arr3.reverse();
console.log(arr3);


console.log('d:');

let arr4 = [];
for (let index = 20; index < 50; index++) {
arr4.push(index);
}
console.log(arr4);


console.log('e:');



let arr5 = [];
for (let index = 30; index < 50; index++) {
arr5.push(index);

}
arr5.reverse();
console.log(arr5);


console.log('f:');

let arr6 = [];
for (let index = 0; index < 10; index++) {
let randomSkaicius = rand(0, 10);
arr6.push(randomSkaicius);

}
console.log(arr6);



console.log('Antra uzduotis.')

let arr7 = [];
for (let index = 0; index < 10; index++) {
let randomSkaicius = rand(0, 10);
arr7.push(randomSkaicius);

}

console.log(arr7.join(' -> '));

console.log('Trecia uzduotis.')


console.log('f masyvo atsitiktiniai skaiciai: ' + arr6);












