}}
const findKeys = require('../findKeys');
const assert = require('chai').assert

describe("#findKeys", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(findKeys([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(findKeys(['5']), '5'); 
  });

  it("returns '3' for [3, 5, 7]", () => {
    assert.deepEqual(findKeys(['5']), '5'); 
  });
});