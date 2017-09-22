// function statement

function greet() {
    console.log('greet');
}

greet();


// function expression

var greeting = function() {
    console.log('greeting')
}

greeting();

// passing function expressions

function log(a) {
    a();
}

log(function() {
    console.log('logging');
})