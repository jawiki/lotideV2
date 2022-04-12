const assertEqual = require('../assertEqual')
const assert = require('chai').assert

describe("#assertEqual", () => {
  
  it("returns true for 1, 1", () => {
    assert.deepEqual(assertEqual(1, 1), true);
  });

  it("returns true for lighthouse labs, lighthouse labs ", () => {
    assert.deepEqual(assertEqual("lighthouse labs", "lighthouse labs"), true); 
  });

  it("returns false for lighthouse labs, bootcamp", () => {
    assert.deepEqual(assertEqual("lighthouse labs", "bootcamp"), false); 
  });
});