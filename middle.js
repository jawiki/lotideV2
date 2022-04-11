const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArrayEqual');

const middle = function(a, b) {
  let arrMiddle = [];
  if (a.length === 1 || a.length === 2){
    arrMiddle = [];
  } else if (a.length % 2 === 1){
    arrMiddle.push(a[Math.floor(a.length/2)]);
  } else if (a.length % 2 === 0){
    arrMiddle.push(a[a.length/2 - 1], a[a.length/2])
  }
  return arrMiddle;
}

module.exports = middle;