// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = str => {
  let count = {};
  str = str.split(" ").join("").split("");
  for (let letter of str) {
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter]++;
    }
  }
  return count;
};

// // TEST CODE
console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
