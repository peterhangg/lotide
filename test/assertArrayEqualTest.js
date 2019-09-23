const assertArraysEqual = require("../assertArrayEqual");
const eqArrays = require("../eqArrays");

// // TEST CODE
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
