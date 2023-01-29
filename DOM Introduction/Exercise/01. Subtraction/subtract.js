function subtract() {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;
  let sum = num1 - num2;

  document.getElementById("result").innerText = sum;
  
}
