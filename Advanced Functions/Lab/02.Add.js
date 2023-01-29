function solution(input){

   return function add(num){

        return num += input
    }

}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));