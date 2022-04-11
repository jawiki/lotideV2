const assertArrayEqual = require('../assertArrayEqual');

const middle = require('../middle');

assertArrayEqual((middle(1, 2, 3, 4)), [2,3]);

  describe("#middle", () => {
    it("returns 2 for [1, 2, 3]", () => {
      assert.deepEqual(middle([1, 2, 3]), 2);
    });
  });
  
  it("returns '5' for ['5']", () => {
    assert.deepEqual(middle(['5']), '5'); 
  });
