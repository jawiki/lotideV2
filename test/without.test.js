}}
const without = require('../without');
const assert = require('chai').assert

// assertEqual(eqArrays([1, 2, 3], ["hello"]), false); // => should FAIL

describe("#without", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(without([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(without(['5']), '5'); 
  });

  it("returns '3' for [3, 5, 7]", () => {
    assert.strictEqual(without(['5']), '5'); 
  });
});