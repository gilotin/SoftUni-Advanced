function solve(array) {
  let result = [];
  let index = 0;

  array.sort((a, b) => {
    return a - b;
  });

  while(array.length !== 0){
    let minNum = array.shift();
    result.push(minNum)
    if(array.length === 0){
        break;
    }
    let maxNum = array.pop();
    result.push(maxNum);
    
  }
  
return result;
}

console.log(solve([1, 65, 3]));
