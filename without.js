const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return true;
    }
  }
  return false;
};

const without = (arr1, arr2) => {
  let filteredArr = arr1.filter(ele => arr2.indexOf(ele) === -1);
  return filteredArr;
};

assertArraysEqual(without([1, 2, 3], [1]),[2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

// alternative

// const without = (arr1, arr2) => {
// let result = [];
// for (let i = 0; i < arr1.length; i++) {
//   if(arr1[i] !== arr2[i]){
//     result.push(arr1[i]);
//   }
// }
// return result;
// }