const tail = require('../tail');
const assert = require('chai').assert

describe("#tail", () => {
  
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });

  it("returns '7' for [3, 5, 7]", () => {
    assert.strictEqual(tail([3, 5, 7]), '7'); 
  });
});