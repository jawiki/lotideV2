const head = require('../head');
const assert = require('assert')
// const mocha = require('mocha')//??

describe("#head", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns '3' for [3, 5, 7]", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});