const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let x = matrix
  let cat = '^^'
  let countCats = []
  x.forEach(e=>  {e.forEach(em =>{
    if(em === cat) countCats.push(1)})})
  if(countCats.length === 0) return 0;
  return countCats.length
  
  
};