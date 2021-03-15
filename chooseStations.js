const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function  (inputStations) {
  //console.log('called chooseStations');

  let goodStations = [];

  for (let stationToCheck of inputStations) {
    if(stationToCheck [1] >= 20 && 
      (stationToCheck[2] === 'school' || stationToCheck[2] === 'community centre')) {
        goodStations[goodStations.length] = stationToCheck[0];

      }
  }

  return goodStations;
}

console.log(chooseStations(stations));