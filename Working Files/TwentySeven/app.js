// function statement : return sum of 2 numbers
function addition(num1, num2) {
    return num1 + num2;
}
var total = addition(1,2);
console.log('Addition of 1 and 2 using function statement : ' + total);

// function expression : return multipication of 2 numbers
var multipication = function(num1, num2) {
    return num1 * num2;
}
var mul = multipication(2,3);
console.log('Multipication of 2 and 3 using function expression : ' +mul);

// IIFE 
(function(num1,num2){
    console.log('Substraction using IIFE : ' + (num1 - num2));
}(5,1));


// closures : 
function add(num1){
    return function(num2){
        return num1 + num2;
    };
}
var add = add(2)(5);
console.log('Addition using Closures : ' + add);