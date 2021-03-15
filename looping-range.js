let range = function (start, end, step) {
  
  let rangeOfNumbers = [];
    
  if(start !== undefined && end !== undefined && step !== undefined && start < end && step > 0) {
    for(let counter = start; counter <= end; counter += step){
      rangeOfNumbers.push(counter);
    }
  }

  return rangeOfNumbers;
};

console.log(range(0 ,10 ,2));