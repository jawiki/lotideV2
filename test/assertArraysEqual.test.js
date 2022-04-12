const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert

describe("#assertArraysEqual", () => {
  
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.deepEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']), true); 
  });

  it("returns false for [3, 5, 7], [6, 6, 6]", () => {
    assert.deepEqual(assertArraysEqual([3, 5, 7], [6, 6, 6]), false); 
  });
});