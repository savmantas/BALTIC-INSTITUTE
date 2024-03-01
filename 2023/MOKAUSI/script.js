'use strict';

//-------------------------FUNCTIONS----------------------

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }
// const appleJuice = fruitProcessor(5,0)
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2,3)
// console.log(appleOrangeJuice);
//--------------------------------------------------------
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }

// const age1 = calcAge1(1987);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// const age2 = calcAge2(1987);

// console.log(age1, age2);

// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(1987);
// console.log(age3);
//--------------------------------------------------------------
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1987, 'Mantas'));
// console.log(yearsUntilRetirement(1992, 'Tomas'));
//--------------------------------------------------------------
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));
//--------------------------------------------------------------
// const calAge = function (year) {
//   return 2024 - year;
// };
// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years.`);
//       return retirement;
//   } else {
//       console.log(`${firstName} has already retired.`);
//       return -1;
//   }
// }

// console.log(yearsUntilRetirement(1987, "Mantas"));
// console.log(yearsUntilRetirement(1950, "Tomas"));
//---------------------------------------------------------------
// function calcAverage(score1, score2, score3) {
//   const average = (score1 + score2 + score3) / 3;
//   return average;
// }

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return "Dolphins win!";
//   } else if (avgDolphins * 2 <= avgKoalas) {
//     return "Koalas win!";
//   } else {
//     return "No team wins...!";
//   }
// }
// console.log(checkWinner(scoreDolphins, scoreKoalas));

//------------------------Arrays------------------------

// const friends = ["Mantas", "Tomas", "Audrius"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = "Antanas";
// console.log(friends);
//----------------------------------------------------------------
// const firstName = "Mantas";
// const mantas = [firstName, "Savickas", 2024 - 1987, 'student', friends];
// console.log(mantas);
//--------------------------------------------------------
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);
//----------------------------------------------------------------
// const friends = ["Mantas", "Tomas", "Audrius"];
// console.log(friends, friends.length);
// friends.push("Evaldas");
// console.log(friends, friends.length);
// friends.unshift("Jonas");
// console.log(friends, friends.length);
// friends.pop();
// console.log(friends, friends.length);
// friends.shift()
// console.log(friends, friends.length);
// console.log(friends.indexOf("Audrius"));
// console.log(friends.includes('Tomas'));

// if (friends.includes('Tomas')){
//     console.log('You have a friend called Tomas.');
// }
// else {console.log('You do not have a friend with such a name');}
//----------------------------------------------------------------
// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//------------------------Objects------------------------

// const mantas = {
//   firstName: "Mantas",
//   lastName: "Savickas",
//   age: 2024 - 1987,
//   job: "student",
//   friends: ["Mantas", "Tomas", "Audrius"],
// };

// console.log(mantas);
// console.log(mantas.lastName);
// console.log(mantas["lastName"]);
// const nameKey = "Name";
// console.log(mantas["first" + nameKey]);
// console.log(mantas["last" + nameKey]);

// // const interestedIn =  prompt('What do you want to know about Mantas? Choose between firstName, lastName, age, job and friends.')
// // console.log(mantas[interestedIn]);

// // if(mantas[interestedIn]){
// //   console.log(mantas[interestedIn]);
// // }
// // else {console.log('Wrong reuest! Choose between firstName, lastName, age, job and friends.');}

// mantas.location = "Lithuanian";
// mantas["google"] = "@gmail.com";
// console.log(mantas);
// console.log(
//   mantas.firstName +
//     " has " +
//     mantas.friends.length +
//     " friends, and his best friend is called " +
//     mantas.friends[1] +
//     "."
// );

//------------------------Object methods------------------------

// const mantas = {
//   firstName: "Mantas",
//   lastName: "Savickas",
//   birthYear: 1987,
//   job: "student",
//   friends: ["Mantas", "Tomas", "Audrius"],
//   hasDriversLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2024 - birthYear;
//   // },
//   // calcAge: function (){
//   //   return 2024 - this.birthYear;
//   // }
//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is as ${this.calcAge()}-years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(mantas.getSummary());

// // console.log(mantas.calcAge());
// // console.log(mantas.age);

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(
//   `${mark.fullName}'s BMI (${mark.bmi}) ${
//     john.bmi > mark.bmi ? "is lower" : " is higher"
//   } than ${john.fullName}'s (${john.bmi})!`
// );

//----------------------FOR loop--------------------------------

// for(let rep = 1; rep <=10; rep++) {
//   console.log(`Lifting wights repetition ${rep}.`);
// }
//----------------------------------------------------------------
// const mantas = [
//   "Mantas",
//   "Savickas",
//   2024 - 1987,
//   "student",
//   ["Tomas", "Audrius", "Ignas"],
//   true,
// ];
// const types = [];

// for (let i = 0; i < mantas.length; i++) {
//   console.log(mantas[i], typeof mantas[i]);
//   // types[i] = typeof mantas[i];
//   types.push(typeof mantas[i]);
// }
// console.log(types);
//----------------------------------------------------------------
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }
// console.log(ages);

//----------------------continue and break----------------------------

// const mantas = [
//   "Mantas",
//   "Savickas",
//   2024 - 1987,
//   "student",
//   ["Tomas", "Audrius", "Ignas"],
//   true,
// ];

// for (let i = 0; i < mantas.length; i++) {
//   if(typeof mantas[i] !== "string") continue;
//   console.log(mantas[i], typeof mantas[i]);
// }

// for (let i = 0; i < mantas.length; i++) {
//   if(typeof mantas[i] === "number") break;
//   console.log(mantas[i], typeof mantas[i]);
// }

//----------------------------------------------------------------

// const mantas = [
//   "Mantas",
//   "Savickas",
//   2024 - 1987,
//   "student",
//   ["Tomas", "Audrius", "Ignas"],
//   true,
// ];
// for (let i = mantas.length - 1; i >= 0; i--) {
//   console.log(i, mantas[i]);
// }

//---------------------loop inside loop --------------------------------

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----------Starting exercize ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting wights repetition ${rep}`);
//   }
// }

//---------------------While loop---------------------------------------

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting wights repetition ${rep}.`);
//   rep++;
// }

// let dice = Math.floor(Math.random() * 6) + 1;

// while (dice !== 6){
//   console.log(`You rolled a ${dice}`);
//   dice = Math.floor(Math.random() * 6) + 1;
//   if(dice ===6){
//     console.log('Loop is about to end...');
//   }
// }

//----------------------------------------------------------------

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// for (let i = 0; i < bills.length; i++){
//   if(bills[i] >= 50 && bills[i] <= 300){
//     tips.push(bills[i] * 0.15);
//     totals.push(bills[i] + tips[i]);
//   }
//   else {
//     tips.push(bills[i] * 0.2);
//     totals.push(bills[i] + tips[i]);
//   }
// }

// let sum = 0;

// function calcAverage(arr){
//   for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(tips);
// console.log(totals);
// console.log(calcAverage(tips));

//--------finding max and min, ignoring error, merge() 2 arrays----------

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(min, max);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [9, -5, -6, -1, 'error', 9, 23, 17, 19, 14, 9, 5];
// const calcTempAmplitudeNew = function (t1,t2) {
// const temps = t1.concat(t2);
// console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(min, max);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew(temperatures,temperatures2);
// console.log(amplitudeNew);

// function measureKelvin() {
//   const measurment = {
//     type: 'temp',
//     unit: 'celcius',
//     value: Number (prompt('Degrees celsius:')),
//   };
//   const kelvin = measurment.value + 273;
//   return kelvin;
// }
// console.log(measureKelvin());

//----------------------------------------------------------------

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// function printForecast(arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]} C in ${i + 1} days ...`;
//   }
//   console.log('...' + str);
// }

// printForecast(data1);

//----------------------------------------------------------------


