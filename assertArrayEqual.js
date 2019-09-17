const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const eqArrays = (arr1, arr2) => {
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++){
    if (arr1[i] === arr2[i]){
      return true;
    }
  }
  return false
}

// // TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]);
