
const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert

describe("#assertObjectsEqual", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(assertObjectsEqual([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(assertObjectsEqual(['5']), '5'); 
  });

  it("returns '3' for [3, 5, 7]", () => {
    assert.deepEqual(assertObjectsEqual(['5']), '5'); 
  });
});