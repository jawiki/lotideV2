const assertEqual = require('./assertEqual');

const head = function (arr) {
  let result = arr[0];
  return result
};

// assertEqual(head([5,6,7]), 5);

module.exports = head;