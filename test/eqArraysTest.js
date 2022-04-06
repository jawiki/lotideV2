const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1], [3]), false); // => should FAIL
assertEqual(eqArrays(["hello"], ["hello"]), true); // => should PASS
assertEqual(eqArrays(["hello"], ["bye"]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], ["hello"]), false); // => should FAIL
