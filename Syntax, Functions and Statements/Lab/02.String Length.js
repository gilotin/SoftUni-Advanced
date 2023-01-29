function strLength(str1, str2, str3) {
  let SumOfLengths = str1.length + str2.length + str3.length;
  let avgLength = Math.floor(SumOfLengths / 3);
  console.log(SumOfLengths);
  console.log(avgLength);
}
strLength("chocolate", "ice cream", "cake");
strLength("pasta", "5", "22.3");
