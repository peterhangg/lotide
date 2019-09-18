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

const letterPositions = str => {
  let result = {};
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === " ") {
      continue;
    } else if (!result[letter]) {
      result[letter] = [i];
    } else {
      result[letter].push(i);
    }
  }
  return result;
};

// // TEST CODE
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").h, [0]);