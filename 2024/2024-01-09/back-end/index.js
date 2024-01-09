const log = require("./logging").log;
const logNoDate = require("./logging").logNoDate;
function kreipimasisIServeri() {
  console.log("Siunciamas atsakymas atgal");
  log("Ivyko vartotojo kreipimasis i serveri");
  logNoDate("Ivyko vartotojo kreipimasis i serveri");
}
kreipimasisIServeri();
