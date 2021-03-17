const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

let judgeVegetable = function (vegetables, metric) {
  
  let bestVegetable = vegetables[0];
  
  for (let i = 0; i < vegetables.length; i++) {
    if(metric === 'redness') {
      if(vegetables[i].redness >= bestVegetable.redness) {
        bestVegetable = vegetables[i];
      }
    } else if (metric === 'plumpness') {
      if(vegetables[i].plumpness >= bestVegetable.plumpness) {
        bestVegetable = vegetables[i];
      }
    } 
  }

  return bestVegetable.submitter;
} 

console.log(judgeVegetable(vegetables, metric));

