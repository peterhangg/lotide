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

module.exports = middle