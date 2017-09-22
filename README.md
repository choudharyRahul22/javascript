# javascript

JavaScript:
-----------

Syntax Parser: 
--------------
When you write a code your code will be check character by character like function make(), f then u then n so on and once function is find, it finds it a valid syntax and will look for a space than.
This is done by the compiler and interpreter, these are programs which will read your code and change it to machine undersatnable.

Lexical Environment: 
--------------------
Lexical means 'having to do with words or grammer'. A lexical environment is exist in programming languages in which 'where you write something is important'.
Like finction make(){ var a = 'Rahul';}
here var a is sitting inside a function make.

Execution Context: 
------------------
A wrapper to help manage the code that is running.There are lots of lexiacl environment, which one is currently running is managed via execution context.It contain things that are beyond what you have written in your code.

Name Value Pair: 
----------------
A name which maps to unique value.The name may be defined more than once, but only can have one value in any given context.
Value may be more name value pair.

Objects: 
--------
Collecions of name value pair.

The Global Environment & Global Object: 
---------------------------------------
When our code runs inside a execution context, there were more than one execution context but here we are going to look at base execution conext that is global execution context.
Thing that is accessable to everyone from everywhere in the code.
global execution context creates 'global object' and a special variable called 'this' for us(javascript engine create this)

For Coding we are going to use Brackets

First code:
-----------
index.html
<html>
    <head>

    </head>
    
        <body>
            <script src="app.js"></script>
        </body>
    
</html>

app.js
console.log(this);
console.log(window); 

as we already stated once our code runs the js engine will create a global object and this.
global object is the window object which you will see in browser console.
each tab or each window has its own global object.

Global: 
-------
"Not inside a function"

Second Code:
-----------
app.js

var name = 'Rahul Choudhary';

function myNmae() {
    
}

var name and function both sits on global execution context, so we can fetch them by.
if we do on console : name we will get Rahul Choudhary same if we do this.name or window.name

Execution Context has 
1.Global object
2.Special variable called this
3.Outer Environment will discuss later
4.Your Code which sits globally

Third Code:
-----------
app.js

myNmae();
console.log(name);

var name = 'Rahul Choudhary';

function myNmae() {
    console.log("myName function invoked!");
}

we call the function and variable before we define it and we got undefined for name !
Behind the scen:
Execution context is created in 2 phase:
---------------------------------------- 
	a.Creation Phase: In creation phase js engine create global object , this, outer environmet, sets up memory space for functions and variables know as 'Hoisting'.
	so when we sets up memory sapce for variables we dont know what its value so it assign undefined all variables.
	However, only the declaration part is being hoisted; the assignment, on the other hand, is not.

	b.Execution Phase: In execution phase js engine create global object , this, outer environmet, and runs your code.

If we reomve line 76 (var name = 'Rahul Choudhary';) we will get Uncaught ErrorReference : name is not defined.

Single Threaded: 
----------------
One Command At A Time.Javascript behave in a single threaded manner, but browser is not single threaded.

Synchronus Execution: 
---------------------
Synchronus means one at a time and in order.

Function Invocation: 
--------------------
Invocation means running a function by using function name ()

Fourth Code:
------------
app.js

function b() {
    console.log('Invoked function b');
}

function a() {
    b();
    console.log('Invoked function a');
}

a();

What just happen : 
1. Global execution context is created and executed.
2. a() execution context is created and executed.
3. b() execution context is created and executed.

on global execution context a() execution context is created on which b() execution is created in a stack once b() finishes of removed from stack once a() finishes of removed from stack.
when control goes on b() then b() will run until it finishes off.

Variable Environment: 
---------------------
where the variables lives

Fifth Code:
-----------
app.js

function b() {
    var num;
    console.log('Var num ' + num);
    console.log('Invoked function b');
}

function a() {
    b();
    var num = 10;
    console.log('Var num ' + num);
    console.log('Invoked function a');
}

var num = 20;
console.log('Var num ' + num);

a();

console.log('Var num ' + num);

Var num 20
app.js:3 Var num undefined
app.js:4 Invoked function b
app.js:10 Var num 10
app.js:11 Invoked function a
app.js:19 Var num 20

The Scope Chain: 
----------------
scope means where i can access a variable and scope chain means access chain for example.

Sixth Code:
-----------
app.js

function b() {
    console.log('From b() ' + name)
}

function a() {
    var name = 'Rahul';
    console.log('From a() ' + name);
    b();
}

var name = 'Shalu';
console.log('Var name ' + name);

a();

Var name Shalu
app.js:7 From a() Rahul
app.js:2 From b() Shalu

function b, function a and variable name is sitting lexically on global execution context.
so function b dont have variable name so it will look at outer reference, remember each execution context has global object, this, outer reference, running code.

so function b outer reference (where function b is physically sitting) is global exectuion context thats why we get Shalu here.

Seventh Code:
-------------
app.js

function a() {
    var name = 'Rahul';
    console.log('From a() ' + name);
    
    function b() {
    console.log('From b() ' + name)
    }
    
    b();
}

var name = 'Shalu';
console.log('Var name ' + name);

a();

Var name Shalu
app.js:5 From a() Rahul
app.js:8 From b() Rahul

function b lexically (physically) sists on function a , on function a it will search for variable name, and here it finds variable name.

Eight Code:
-----------

app.js

function a() {
     
    function b() {
    console.log('From b() ' + name)
    }
    
    b();
}

var name = 'Shalu';
console.log('Var name ' + name);

a();

Var name Shalu
app.js:4 From b() Shalu

Above first it finds function b lexically (physically) sits on function a but in function a we dont have variable name, than it again look for outer reference this time function a is lexically sits on global execution context and we find variable name.

Asynchronous Callback: 
----------------------
More than one at a time, The browser has rendring engine, javascript engine and http request which all works asynchronously.
Javascript engine runs synchronously.

We have execution context and events queue in javascript.
browser will put events like click on event queue once the execution stack will be empty than it will look for event queue, and runs the click hanlder function execution context.

or like javascript will request some data using http so it will put it on event queue and once the execution stack is empty it will handle the http request.

For example:

Nineth Code:
------------
app.js

function waitForThreeSeconds() {
    var ms = 3000+ new Date().getTime();
    
    while(new Date() < ms) {
    }
    
    console.log('Finished Function waitForThreeSeconds');
}

function clickHandler() {
    console.log('Click handler');
}

document.addEventListener('click',clickHandler);

waitForThreeSeconds();

console.log('Finished Execution of program');

Finished Function waitForThreeSeconds
app.js:18 Finished Execution of program

above the browser will load after 3 second as we call function waitForThreeSeconds and this will run on global execution context.
if we click anywhere on document than it will be register in event queue and once the execution context is finished than event queue will run.

Finished Function waitForThreeSeconds
app.js:18 Finished Execution of program
app.js:11 Click handler

Types and Javascript: 
---------------------
Dynamic Typing : you dont tell the engine what tyoe of data a variable holds, it figures it out while your code is running.

Primitve Types in javascript : 
------------------------------
A type of data that represents a single value, that is not a object (a key value pair).
1.undefined : varaible sets initially
2.null : sets variable to nothing
3.boolean : true or false
4.number : floating point number
5.String : sequence of charater both in single and double quotes
6.symbol : used in ES6, not support by all browsers.

Operators: 
----------
A special function that is written differently, genrally operator takes 2 parameters and return 1 result.
operators are functions, + is function which take 2 variable and return a number
+(3,4) prefix notation
(3,4)+ postfix notation
3 + 4  infix notation 

similarly there are other functions like > which take 2 argument and return boolean
var a = 4 > 3;
console.log(a); true

Operator Precedence: 
--------------------
Which operator function gets called first, operator function are called in order of precedence. 

Operator Associativity: 
-----------------------
What order operator function gets called in
left to right(Left Associativity) or right to left(Right Associativity), when operator function have same precedence.

https://developer.mozilla.org/en-US/docs/web/javascript/reference/operators/operator_precedence

Tenth Code:
-----------
app.js

var total1 = 3 + 4 * 5;
console.log(total1);

var total2 = (3 + 4) * 5;
console.log(total2);

Coercion: 
---------
converting a value from one type to another.This happen quite often in js as js is dynamically typed.

Eleventh Code:
--------------
app.js

var a = 1;

var b = '2';

var total = a + b;

console.log(total); 12

what just happened, + operator function gets a number and a string, it converts the number to the string and gives string 12.

Comparision Operator:
---------------------
< or >

Twelfth Code:
-------------
app.js

console.log(1 < 2 < 3); true
console.log(3 < 2 < 1); true

what just happen, first we talk about 
1 < 2 < 3 , here < has left to right associativity
1 < 2 result to true
true < 3 now boolean value true will be converted to number 

We do on console
Number(true)
1
Number(false)
0

so now we get 1 < 3 from above which result in true.

app.js

var a = 0;
var b = false;

if(a == b){
    console.log('they are equal');
} else {
    console.log('they are not equal');
}


var c = 0;
var d = false;

if(c === d){
    console.log('they are equal');
} else {
    console.log('they are not equal');
}

== and === , always use === as this will never convert from one type to other.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

Default Values:
---------------

Thireteen Code:
---------------
app.js

function greet(name){
    
    var greetingName = name === undefined ? 'Rahul' : name;
    
    console.log(greetingName);
}

greet('Ravi');

greet();

Objects & Functions:
--------------------
Objects has property and methods
a. primitive "property"
b. object "property"
c. function "method"

Note: function inside object known as method.

Object has reference to these property and methods.

Fourteenth Code:
----------------
app.js

var rahul = {
    firstName: 'Rahul',
    lastName: 'Choudhary',
    address: {
        street: 'VVIP Addresses',
        city: 'Ghaziabad',
        state: 'U.P'
    }
}

function data(person){
    console.log('Hi ' + person.firstName);
}

data(rahul);

data({
    firstName: 'Shalu',
    lastName: 'Choudhary'
})

Namespace:
----------
A container for variables and functions, typically to keep variable and functions with same name seprate.

Fifteenth Code:
---------------
app.js

var greet = 'Hello';
var greet = 'Hola';

console.log(greet);


var english = {
    greet : 'Hello'
}

var spanish = {
    greet : 'Hola'
}

console.log(english.greet);
console.log(spanish.greet);

Json and Object Literal:
------------------------
Json object notation is inspired from js object notation.
json is subset of js, a valid json will be a valid js but reverse is not always true.
in json the key should be in double quotes, in js we can have or we cant.

Sixteenth Code:
---------------
app.js

var js = {
    firstName: 'Rahul',
    lastName: 'Choudhary'
}

console.log(JSON.stringify(js));

var jsonValue = JSON.parse('{"firstName": "Shalu","lastName": "Bhalu"}');
                      
console.log(jsonValue);

{"firstName":"Rahul","lastName":"Choudhary"}
{firstName: "Shalu", lastName: "Bhalu"}

Functions are Objects:
----------------------
First Class Function: Everything you do with other type you can do with functions.
We can assign functions to a variable, pass then as a argument, even create them on the fly.

Functions : we can attach primitive, objects, other functions to a function.
functions has name and code.
function without name are anonymous functions.

functions are objects and these name and code property sits on object.
we can invoke code property using () on object.

Seventeenth Code:
-----------------
app.js

function greet() {
    console.log('hi');
}

// attach variable to function
greet.firstName = 'Rahul';
greet.lastName = 'Choudhary';

// attach object to function
greet.address = {
    city: 'Bareilly'
}

// attach function as variable to function
greet.fullName = function() { 
    console.log(greet.firstName + " " + greet.lastName);
}

greet();
console.log(greet);

console.log(greet.firstName);

console.log(greet.address);

greet.fullName();  

Function Statements and Function Expressions:
---------------------------------------------
Expression: a unit of code that result in a value.
Statement: just does work.

example: if statement, if is a statement that just do the work and didnt return anything, but for if we require if(expression), this expression return a value here it return boolean.

Eighteenth Code:
----------------
app.js

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

above function greet is in global execution context, in creation phase the function greet will save in memory and greeting is a variable which will assign to undefined.
if we run greet function before define we wont get any error as function greet is in memory but if we run variable greeting before define (that is undefined) we will get Uncaught error undefined is not a function.

By Value Vs By Reference:
-------------------------
By value: all primitives behaves as by value. = see we have primitive on right so it will create a copy and assign the value to left.
var a = 1; a points to 1
var b = a ; a new copy of a will be created and b will point to that.

By reference: all objects (including functions) behaves as by reference. = see we have object on right so it will point the same object for the left variable.
var person = {} ; person point to object 
var rahul = person; no copy will be created rahul will point to same object which is point by person.

For example i known by 2 name Rahul and Sunny(by value) but my address is same(by reference).

muttate : to chnage a value.
immutatble : which cant be change.

Nineteenth Code:
----------------
app.js

// by value

var a = 3;

var b = a;

a = 2;

console.log(a);
console.log(b);

// by reference

var c = {
    greeting : 'welcome'
}

var d = c;

c.greeting = 'welcome back';

console.log(c);
console.log(d);

// by reference (as parameter)
function greet(s) {
    s.greeting = 'Hola';
}

greet(c);

console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)

c = {greeting:'Welcome in spanish'};

console.log(c);
console.log(d);

Objects Functions and This:
---------------------------
When execution context is created (creation phase) we have variable environment, this, outer environment.

Twenty Code:
------------
app.js

// this on global execution context point to window object.
console.log(this);

// function statement with this : this will point to window object
function a() {
    console.log(this);
    this.attchToGlobal = 'Global variable';
}

// function expression with this : this will point to window object
var b = function() {
    console.log(this);
}

a();
console.log(attchToGlobal);
b();

//
var c = {
    name: 'rahul',
    log: function(){
        console.log(this);
        this.name = 'shalu';
        console.log(this);
    } 
}

c.log();

// not a bug its how js engine behaves

console.log('*************************');

var d = {
    name: 'rahul',
    log: function(){
        console.log(this);
        this.name = 'shalu';
        console.log(this);
        
        var setName = function(name){
            // this will point to global window object, you can see the variable is set to global object
            this.name = name;
        }
        setName('new chnaged name');
        console.log(this);
    } 
}

d.log();
// setNmae function sets the name to window object/global object
console.log(name);

// overcome above by using self
console.log('*************************');
var e = {
    name: 'rahul',
    log: function(){
        var self = this;
        console.log(self);
        self.name = 'shalu';
        console.log(self);
        
        var setName = function(name){
            self.name = name;
        }
        setName('new chnaged name');
        console.log(self);
    } 
}

e.log();

Arrays:
-------
Collection of anything.
Normally a array holds a collection of things of pirticular type like strings or numbers.
But js is dynamically typed so it holds string, number, objects, functions.

TwentyOne Code:
---------------
app.js

var numbers = [1,2,3,4];
console.log(numbers);

console.log(numbers[0]);

var arr = [
        1,
        true,
        {
            name: 'rahul'
        },
        function(name){
            console.log(name);
        },
        'String'
        
];

console.log(arr);

arr[3](arr[2].name);

Arguments and Spread:
---------------------
When a execution context is created we get :
variable environment, this, outer environment, and arguments
arguments contains list of all arguments that we pass to a function.

arguments: parameters that we pass to a function. js gives us keyword of same name which contains them all.

TwentyTwo Code:
---------------
app.js

function greet(firstName, lastName, language) {
    
    language = language || 'English';
    
    if(arguments.length === 0){
        console.log('Missing Parameters');
        return;
    }
    
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);
    console.log('arg[0] : '+arguments[0]);
    console.log('-------------')
    
}

greet();
greet('Rahul');
greet('Rahul','Choudhary');
greet('Rahul','Choudhary','Hindi');

Function Overloading:
---------------------
function with same name but with different parameters.
we dont have function overloading in js but we have first class functions.
we can achive function overloading by using different patterns one is below.

TwentyThree Code:
------------------
app.js

function greet(firstName, lastName, language) {
    
    language = language || 'en';
    
    if(language === 'en')
    console.log('Hello ' + firstName + ' ' + lastName);
    
    if(language === 'es')
    console.log('Hola ' + firstName + ' ' + lastName);
    
}

function greetEnglish(firstName, lastName){
    greet(firstName,lastName,'en');
}

function greetSpanish(firstName, lastName){
    greet(firstName,lastName,'es');
}

greetEnglish('Rahul','Choudhary');
greetSpanish('Rahul','Choudhary');

Automatic Semicolon Insertion by Syntax Parser:
-----------------------------------------------
syntax parser will put ; for us automatically.
return : sysntax parser will read r...e...t..u..r...n than expect a ';' if we dont provide it will put by own.

TwentyFour Code:
----------------
app.js

function greet() {
    
    /* if we do like this syntax parser will put ; for us and code will return from line no 4 
    return
    {
        firstName:'Rahul'
    }*/
    
    // always use this way
    return {
        firstName:'Rahul'
    }
    
}

console.log(greet());

Whitespace:
-----------
invisible characters that create literal space in your written code.
like when we do carraige return (enter), tab , space in our code.

TwentyFive Code:
----------------
app.js

var

    // firstname of person
    firstname,
    
    // lastname of person
    lastname,
    
    // language of person
    language;

var person = {
    // firstname key value pair
    firstname:'Rahul',
    
    // lastname key value pair
    lastname:'Choudhary',
}

console.log(person);

(IIFE)s Immediately Invoked Function Expressions:
-------------------------------------------------
we can create the function expression and call it on the fly.

TwentySix Code:
---------------
app.js

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
















