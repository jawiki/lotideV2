const assertEqual = require('./assertEqual');

const tail = function (arr) {
  let res = arr[arr.length - 1];
  return res
};

module.exports = tail