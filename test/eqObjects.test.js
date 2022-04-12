}}
const eqObjects = require('../eqObjects');
const assert = require('chai').assert

describe("#eqObjects", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(eqObjects([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(eqObjects(['5']), '5'); 
  });

  it("returns '3' for [3, 5, 7]", () => {
    assert.deepEqual(eqObjects(['5']), '5'); 
  });
});

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false