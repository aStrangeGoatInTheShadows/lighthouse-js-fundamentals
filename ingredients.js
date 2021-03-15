const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let loopNum = 0;

while(loopNum < ingredients.length) {

  console.log(ingredients[loopNum]);

  loopNum++;
}

// Write a for loop that prints out the contents of ingredients:

for(loopNum = 0; loopNum < ingredients.length; loopNum++) {
  console.log(ingredients[loopNum]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for(loopNum = ingredients.length - 1; loopNum >= 0; loopNum--) {
  console.log(ingredients[loopNum]);
}