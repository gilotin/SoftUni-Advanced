function largestNum(...numbers) {
  let arr = [...numbers];
  let biggestNum = arr.sort((a,b) => b - a ).shift()
  console.log(`The largest number is ${biggestNum}.`);
}
largestNum(5, -3, 16);
largestNum(-3, -5, -22.5)