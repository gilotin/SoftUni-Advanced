function createFormatter(separator, symbol, symbolFirst, func) {
  let result = {
    separator: separator,
    symbol: symbol,
    symbolFirst: symbolFirst,
    func: func,
  };

  let formatter = function (value) {
    return result.func(result.separator, result.symbol, result.symbolFirst, value);
  };
  return formatter;
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) return symbol + " " + result;
  else return result + " " + symbol;
}
let dollarFormatter = createFormatter(",", "$", true, currencyFormatter);
7;

console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71
