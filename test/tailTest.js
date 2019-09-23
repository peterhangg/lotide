const assert = require('chai').assert;
const tail = require("../tail");
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#head", () => {
  it("returns 2 for result.length, 2", () => {
    assert.deepEqual((result.length, 2), 2);
  });

  it("return 'lighthouse' for  result[0]", () => {
    assert.deepEqual((result[0]), "Lighthouse");
  });

  it("return Labs for result[1]", () => {
    assert.deepEqual((result[1]), "Labs");
  });

  it("return [] for tails([])", () => {
    assert.deepEqual(tail([]), []);
  });
});
