let concat = function (arrayOne, arrayTwo) {

  let newArray = arrayOne;

  for (let i = 0; i < arrayTwo.length; i++) {
    newArray.push(arrayTwo[i]);
  }

  return newArray;
}




console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
console.log(concat([],[]) + '2 Empty Arrays');