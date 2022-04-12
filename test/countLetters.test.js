}}
const countLetters = require('../countLetters');
const assert = require('chai').assert

describe("#countLetters", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(countLetters([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(countLetters(['5']), '5'); 
  });

  it("returns '3' for [3, 5, 7]", () => {
    assert.strictEqual(countLetters(['5']), '5'); 
  });
});