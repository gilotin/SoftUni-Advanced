function mathOperation(num1, num2, argument){
    let result = 0;
    switch(argument){
        case '+' : result = num1 + num2; break;
        case '-' : result = num1 - num2;break;
        case '*' : result = num1 * num2;break;
        case '/' : result = num1 / num2;break;
        case '%' : result = num1 % num2;break;
        case '**' : result = num1 ** num2;break;
    }
    console.log(result);
}
mathOperation(5, 6, '+');