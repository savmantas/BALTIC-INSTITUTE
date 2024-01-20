// let availableCharacters = 100;
// let writtenCharacters =
//   "The Weather Channel and weather.com provide a national and local weather forecast for cities, as well as weather radar, report and hurricane coverage.";
// let leftToWriteCharacters = availableCharacters - writtenCharacters.length;
// console.log(
//   `You have written ${writtenCharacters.length} characters, you have left ${leftToWriteCharacters} characters left.`
// );
// console.log((writtenCharacters.slice(0,100)));

// let dogAge = prompt("How old is your dog?");
// let humanAge = (dogAge - 2) * 4 + 21;
// alert("Your dog is " + humanAge + "years old in human years.");

// function getMilk(money) {
//   let bottlePrice = 1.5;
//   let ammountOfBottles = money / bottlePrice;
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log(
//     "You gave me " +
//       money +
//       "$ so i could buy " +
//       Math.floor(ammountOfBottles) +
//       " bottles of milk."
//   );
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
//   return money % 1.5;
// }
// let change = getMilk(7);
// console.log(change);

// function lifeInWeeks(age) {
//   let yearsLeft = 90 - age;
//   let monthsLeft = yearsLeft * 12;
//   let weeksLeft = yearsLeft * 52;
//   let daysLeft = yearsLeft * 365;
//   console.log(
//     "You have " +
//       daysLeft +
//       " days, " +
//       weeksLeft +
//       " weeks, " +
//       "and " +
//       monthsLeft +
//       " months left."
//   );
// }
// lifeInWeeks(36);

// function bmiCalculator(weight, height) {
//   let bmi = weight / height ** 2;
//   if(bmi<18.5){
//     console.log(`Your BMI is ${bmi.toFixed(1)} so you are underweight.`);
//   }
//   else if(bmi>18.5 && bmi<24.9 ){
//     console.log(`Your BMI is ${bmi.toFixed(1)} so you have normal weight.`);
//   }
//   else console.log(`Your BMI is ${bmi.toFixed(1)} so you are overweight.`);
//   return bmi.toFixed(1);
// }
// console.log((bmiCalculator(92, 1.85)));

// prompt('Koks tavo vardas?')
// prompt('Koks tavo antros puses vardas?')

// let meilesProcentas = Math.random()*100
// meilesProcentas = Math.floor(meilesProcentas)+1
// alert('Yra ' + meilesProcentas + '% tikimybe, kad jus siandien uzsiimsite')

// let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// let guestName = "Angela";
// if (guestList.includes(guestName)) {
//   console.log("Welcome!");
// } else console.log("Sorry, You are not on the list.");

// let output = [];
// let count = 1;

// function fizzBuzz() {
//   while (count <= 100) {
//     output.push(count++);
//     if (count % 3 === 0 && count % 5 !== 0) {
//       output.pop;
//       output.push("Fizz");
//       count++;
//       if (count % 5 === 0 && count % 3 !== 0) {
//         output.pop;
//         output.push("Buzz");
//         count++;
//       }
//     }
//     if (count % 3 === 0 && count % 5 === 0) {
//       output.pop;
//       output.push("FizzBuzz");
//       count++;
//     }
//   }
// }

// fizzBuzz();

// console.log(output);

// names = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// function whosPaying(names) {
//   numberOfPeople = names.length;
//   let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
//   let randomPerson = names[randomPersonPosition];
//   return randomPerson;

// }
// console.log(whosPaying(names));

// function fibonacciGenerator(n) {
//   let output = [];
//   if (n === 1) {
//     output = [0];
//   } else if (n === 2) {
//     output = [0, 1];
//   } else {
//     output = [0, 1];
//     for (let i = 2; i < n; i++) {
//       output.push(output[output.length - 2] + output[output.length - 1]);
//     }
//   }
//   return output;
// }
// output = fibonacciGenerator(10)
// console.log(output);