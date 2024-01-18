let availableCharacters = 100;
let writtenCharacters =
  "The Weather Channel and weather.com provide a national and local weather forecast for cities, as well as weather radar, report and hurricane coverage.";
let leftToWriteCharacters = availableCharacters - writtenCharacters.length;

console.log(
  `You have written ${writtenCharacters.length} characters, you have left ${leftToWriteCharacters} characters left.`
);
console.log((writtenCharacters.slice(0,100)));