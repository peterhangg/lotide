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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  const mid1 = array[Math.floor((array.length / 2)) - 1];
  const mid2 = array[Math.floor((array.length / 2))];
  let middle = [];
  if (array.length <= 2) {
    return middle;
  }
  if (array.length % 2 === 0) {
    middle.push(mid1,mid2);
  } else {
    middle.push(mid2);
  }
  return middle;
};

// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
// console.log(middle([0,1,2,3,4,5]))
assertArraysEqual(middle(([1, 2, 3, 4, 5, 6])), [3, 4]);