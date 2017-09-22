// function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('Rahul');

// function expression
var greetFun = function(name){
    console.log('Hello ' + name);
}
greetFun('Shalu');

// IIFE , below code will return greeting function, and how do we invoke a function by using (), so greeting('Choudhary') is same as below.
var greeting = function(name){
    console.log('Hello ' + name);
}('Choudhary');

// below greetings is a string which contian value which is return by IIFE.
var greetings = function(name){
    return 'Hello ' + name;
}('Rahul Choudhary');
console.log(greetings);

// () always take expression, we have function expression which we can pass to it.We can call our function using ()
(function(name){
    console.log('Hello from IIFE : ' + name);
}('Rahul Choudhary'));