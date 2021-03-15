
for (let count = 100; count <= 200; count ++) {
  let output = '';

  if(count % 3 === 0) {
    output += 'Loopy';
  }
  
  if (count % 4 === 0) {
    output += 'Lighthouse';  
  } 

  if(output) {
    console.log(output);
  } else {
    console.log(count);
  }
  
}