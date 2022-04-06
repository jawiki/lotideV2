const eqArrays = require('../eqArrays');


function assertArraysEqual (arr1, arr2) {

  if (eqArrays(arr1, arr2) === true) {

    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
}

module.exports = assertArraysEqual;

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 2, 1])
assertArraysEqual(['1', '2', '3'], ['1', '2', '3'])
assertArraysEqual(['1', '2', '3'], ['1', '2', 3])