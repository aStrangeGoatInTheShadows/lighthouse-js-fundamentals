

let lastIndexOf = function (inputArray, valueToFind) {
  let currentFoundIndex = 0;
  let lastFoundIndex = -2;

  while(currentFoundIndex !== -1)
  {
    currentFoundIndex = inputArray.indexOf(valueToFind, currentFoundIndex);

    if(currentFoundIndex !== -1) {
      lastFoundIndex = currentFoundIndex;
    }
    
    if(currentFoundIndex != -1) {
      currentFoundIndex++;
    }
  }
  if (lastFoundIndex === -2) {
    return -1;
  } else {
    return lastFoundIndex;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([3], 3), "=?", 0);
