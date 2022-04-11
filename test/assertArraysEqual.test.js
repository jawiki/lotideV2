const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 2, 1])
assertArraysEqual(['1', '2', '3'], ['1', '2', '3'])
assertArraysEqual(['1', '2', '3'], ['1', '2', 3])

describe("#assertArraysEqual", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(assertArraysEqual(['5']), '5'); 
  });

  it("returns '3' for [3, 5, 7]", () => {
    assert.strictEqual(assertArraysEqual(['5']), '5'); 
  });
});