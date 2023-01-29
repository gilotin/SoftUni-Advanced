function add(num) {
    let total = num;

    return function calc(num2) {
        total += num2
        calc.toString = () => total;
        return calc;
    
  }
}
console.log(add(1)(6)(-3));

