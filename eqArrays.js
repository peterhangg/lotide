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

console.log(eqArrays([1, 2, 3, 4], [1, 2, 3]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));

// // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // // TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

