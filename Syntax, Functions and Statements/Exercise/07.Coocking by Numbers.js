function cooking(inputNum, param1, param2, param3, param4, param5) {

    inputNum = param(inputNum, param1)
    inputNum = param(inputNum, param2)
    inputNum = param(inputNum, param3)
    inputNum = param(inputNum, param4)
    inputNum = param(inputNum, param5)

  function param(num, command) {
    switch (command) {
      case "chop":
         num /= 2;
        console.log(num);
        break;
      case "dice":
        num = Math.sqrt(num);
        console.log(num);
        break;
      case "spice":
        num += 1;
        console.log(num);
        break;
      case "bake":
        num *= 3;
        console.log(num);
        break;
      case "fillet":
        num = (num * 0.8).toFixed(2);
        console.log(num);
        break;
    }
    return num
  }
}
cooking("32", "chop", "chop", "chop", "chop", "chop");
console.log(`---------------`);
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')