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

const mantas = {
  firstName: "Mantas",
  lastName: "Savickas",
  birthYear: 1987,
  job: "student",
  friends: ["Mantas", "Tomas", "Audrius"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },
  calcAge: function (){
    return 2024 - this.birthYear;
  }
};
console.log(mantas.calcAge());