const eqArrays = require('../eqArrays');
const assert = require('chai').assert

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1], [3]), false); // => should FAIL
// assertEqual(eqArrays(["hello"], ["hello"]), true); // => should PASS
// assertEqual(eqArrays(["hello"], ["bye"]), false); // => should FAIL
// assertEqual(eqArrays([1, 2, 3], ["hello"]), false); // => should FAIL

describe("#eqArrays", () => {
  
  it("returns 'true' for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns 'false' for [1], [3]", () => {
    assert.deepEqual(eqArrays([1], [3]), false); 
  });

  it("returns 'false' for [1, 2, 3], [5] ", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [5]), true); 
  });
});