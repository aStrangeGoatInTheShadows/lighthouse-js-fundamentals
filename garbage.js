
let smartGarbage = function(trash, bins) {
  switch (trash) {
  case 'recycling' : bins.recycling++;
    break;
  case 'waste' : bins.waste = bins.waste++;
    break;
  case 'compost' : bins.compost++;
  }

  return bins;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });


