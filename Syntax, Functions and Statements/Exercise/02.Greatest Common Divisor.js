function greatestDivisor(a, b) {
  if (!b) {
    return a;
  }
  return greatestDivisor(b, a % b);
}

console.log(greatestDivisor(15, 5));
console.log(greatestDivisor(2154, 458));
