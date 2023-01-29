function solve(number, year){
    let month = number.toString();
    let result = 0;
    
    switch(month){
        case '1' : result = 31 ;break;
        case '2' : if(year % 4 === 0){
            result = 29;
        }else{
            result = 28;
        } ;break;
        case '3' : result = 31 ;break;
        case '4' : result = 30 ;break;
        case '5' : result = 31 ;break;
        case '6' : result = 30 ;break;
        case '7' : result = 31 ;break;
        case '8' : result = 30 ;break;
        case '9' : result = 31 ;break;
        case '10' : result = 30 ;break;
        case '11' : result = 30 ;break;
        case '12' : result = 31 ;break;
    }
    console.log(result);
}
solve(1, 2012);