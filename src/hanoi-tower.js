const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
 let minturns = (2 ** disksNumber - 1)
let minseconds = Math.floor(minturns / turnsSpeed * 3600)
return {turns: minturns, seconds: minseconds}
};
