let cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

let speed = 38;



let carPassing = function (carsInput, newTrafficsSpeed) {
 
  let newCar = {
    time: Date.now(),
    speed: newTrafficsSpeed
  }
  
  carsInput.push(newCar);

  return carsInput;
}

