const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

let finalPosition = function parade (route) {
  let coordinates = [0,0];

  for (let currentMove of route) {
    
    switch (currentMove) {
    case 'north' : coordinates [1]++;
      break;
    case 'east' : coordinates [0]++;
      break;
    case 'south' : coordinates [1]--;
      break;
    case 'west' : coordinates [0]--;
    }
  }

  return coordinates;
} 

console.log(finalPosition(moves));