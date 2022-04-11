const tail = require('../tail');
const assert = require('chai').assert

describe("#tail", () => {
  
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), 3);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), '5'); 
  });

  it("returns 7 for [3, 5, 7]", () => {
    assert.deepEqual(tail([3, 5, 7]), 7); 
  });
}); 