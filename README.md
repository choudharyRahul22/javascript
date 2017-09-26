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

If we talk about the below code:
--------------------------------
// () always take expression, we have function expression which we can pass to it.We can call our function using ()
var greeting = 'Hola';
(function(thisKeyword,globalObject,name){
        console.log(thisKeyword);
        console.log(globalObject);
        thisKeyword.greeting = 'Heloooooo';
        console.log('Hello from IIFE : ' + name);
}(this,window,'Rahul Choudhary'));
console.log(greeting);

first global execution context will be created, we dont have any function statement, we dont have any variable, we have function expression which is anonymous.
global execution context will have anonymous function ().
once it reach }('Rahul Choudhary')); this will invoke the function.
New execution context will be created, greeting variable will be created on this function execution context and it didnot polute the global object.

Closures:
---------
accessing the variables of function which is poped off the execution context.
will look the example first.

TwentySeven Code:
-----------------
app.js

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

we will talk about the last one that is closures only.
what just happen : global execution context is created on which it finds a function and puts in memory, we call this function in line var add = add(2)(5);
which creates a new execution context, on this execution context we have num1 variable once we reach the return statement, this function add poped off the execution context and return the function below:
function(num2){
        return num1 + num2;
    };
we call the function by just adding (5);
var add = add(2)(5);
once this function is called a new execution context is created with variable num2.
But if we see we find we also require num1 which was on the add execution context.
Thanks to js engine which will not collect this garbage value, return function will point to variable which is still in memory (num1).

So function poped off but its variable is still avaiable and return function still use the poped off function variable, (function which is poped off and function which uses the poped off function variable are closed to each other thats why we used word closures.)

Understanding Closures:
-----------------------

TwentyEight Code:
-----------------
app.js

// problem
function buildFunctions(){
    
    var arr = [];
    
    for(var i = 0 ; i < 3 ; i++ ) {
        arr.push(function(){
            console.log(i);
        });
    }
    
    return arr;
}

var returnVal = buildFunctions();

returnVal[0](); 3
returnVal[1](); 3
returnVal[2](); 3

console.log('----------------------')

// solution
function buildFunctions2(){
    
    var arr = [];
    
    for(var i = 0 ; i < 3 ; i++ ) {
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
             }(i))
        );
    }
    
    return arr;
}

var returnVal2 = buildFunctions2();

returnVal2[0](); 0
returnVal2[1](); 1
returnVal2[2](); 2


we need to create 3 execution context where each execution context contains 0,1,2 for value of i.
This is possible if we use IIFE 3 times and we have to return the function which we can invoke later.

Another Example Closures:
-------------------------

TwentyNine Code:
----------------
app.js

function makeGreeting(language){
    
    return function(firstname,lastname){
        
        if(language === 'en')
            console.log('Hello ' + firstname + ' ' + lastname);
        
        if(language === 'es')
            console.log('Hola ' + firstname + ' ' + lastname);
        
    }
    
}

// 2 execution context will be created, one for greetEnglish and one for greetSpanish in memory, greetEnglish hold 'en' and greetSpanish holds 'es'.
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Rahul','Choudhary');
greetSpanish('Shalu','Choudhary');

Callback Functions:
-------------------
A function you give to another function, to be run when another function is finished.
example:
setTimeout(function(){},3000);
we call setTimeout function and gives it anonymous function, once setTimeout function finished off (after 3000 sec) it will call back the anonymous function.

Thirty Code:
------------
app.js

function callback(){
    
    var greeting  = 'Rahul';
    console.log(greeting);
    
    setTimeout(function(){
        
        greeting = 'Shalu';
        console.log(greeting);
        
    },3000);
     
}

callback();

Call Apply and Bind :
---------------------
As we already talked function are objects.
functions have ...
a.name property  : name of function 
b.code property  : which is invokeable using ()
c.call() method  : function inside object are called method
d.apply() method : function inside object are called method
e.bind() method  : function inside object are called method


ThirtyOne Code:
---------------
app.js

// bind

var person = {
    
    firstname:'Rahul',
    lastname:'Choudhary',
    getFullName:function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var loggedName = function(language1 , language2){
    
    console.log('Logged Name : ' + this.getFullName());
    console.log('Arguments : ' + language1 + ' ' + language2);
    console.log('-----------------')
}

var logged = loggedName.bind(person);

logged('en','es');

we have person object and loggedName function, inside loggedName function we use this keyword which will point to globalexecution context as called on global execution context, on this keyword if we call getFullName() we will get error that
getFullName() is not on this or global object.
Now how to pass person object to loggedName function?
using bind keyword: we will do var logged = loggedName.bind(person);
we called .bind on loggedName not on loggedName() as loggedName is actual object which has property and methods on it.
above line will create a copy of loggedName function and pass it the person object, now where ever we use this, it will point to person object.

//call
loggedName.call(person,'en','es');

above line: call will do what () do on function that it invoke the function.
.call() takes 2 arguments first-argument is what this point to and second arguments.

// apply
loggedName.call(person,['en','es']);

above line: same as call just in takes arguments as array.

// other way issue IIFE
(
    function(language1 , language2){
    
    console.log('Logged Name : ' + this.getFullName());
    console.log('Arguments : ' + language1 + ' ' + language2);
    console.log('-----------------')
}
).apply(person,['Hindi','English']);

dose same as apply do above.

Function Currying:
------------------
create a copy of function but with some preset parameters.useful in mathematics
situations.

// function curring
function multiply(a,b){
    return a*b;
}

var mul = multiply.bind(this,2);
console.log(mul(4));

above: whatever we pass to bind will attch on that function permanently.
ex: multiply.bind(this,2); will bind this and 2 as first parameter permanently.
if we call mul(4); this will be the second argument and 2 as first argument always.
if we call mul(3,4); this will take second argument as 3 and 2 as first argument always.

ex: multiply.bind(this,2,3); will bind 2 as first argument and 3 as second argument always.
if we call mul(4); it wont make any difference and we will get 2*3 = 6 always.
if we call mul(3,4); it wont make any difference and we will get 2*3 = 6 always.

Functional Programming:
-----------------------
Pass functions as parameter and return functions. which minimizes the code.

ThirtyTwo Code:
---------------
app.js

// first way 
var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];
for(var i=0; i < arr1.length ; i++){
    arr2.push(arr1[i] * 2);
}

console.log(arr2);


// second way
function mapForEach(array,fun){
    
    var newArray = [];
    
    for(var i=0; i < array.length ; i++){
       // console.log('Var i ' + i);
        newArray.push(fun(array[i]));
        
    }
    
    return newArray;
    
}

var copyArray = mapForEach(arr1,function(item){
    //console.log('Item ' + item);
    return item * 3;
})

var copyArray2 = mapForEach(arr1,function(item){
   // console.log('Item ' + item);
    return item > 2;
})

console.log(copyArray);
console.log('copyArray2 : ' + copyArray2);

var checkPassesLimit = function(limiter,item){
    return item > limiter;
}

var copyArray3 = mapForEach(arr1,checkPassesLimit.bind(this,1));
console.log('copyArray3 : ' + copyArray3);

var checkPassesLimitSimplified = function(limiter){
    return function(limiter,item){
    return item > limiter;
}.bind(this,limiter);
}

var copyArray4 = mapForEach(arr1,checkPassesLimitSimplified(2));
console.log('copyArray4 : ' + copyArray4);

Using underscore.js:
--------------------
opensource js lib

ThirtyThree code:
-----------------
app.js // make sure you attch underscore.js before your app.js

// first way 
var arr1 = [1,2,3];
console.log(arr1);

// using underscore.js map function
console.log(_.map(arr1,function(item){return item*4; }));


// using underscore.js filter function
var allNumbers = [1,2,3,4,5,6,7,8,9,10];
console.log( _.filter(allNumbers,function(item){
                      return item % 2 === 0; }
                     ));


Object Oriented Javascript and Prototypal Inheritance:
------------------------------------------------------
Inheritance : One object get access to the properties and methods of other object.

Classical Inheritance: we are using this long time , as we do in java.
Prototypal Inheritance: simple, flexiable, extensible, easy to understand.

ThirtyFour Code:
----------------
app.js

var person = {
    
    firstname: 'Default',
    lastname:'Default',
    getFullName:  function(){
        return this.firstname + ' ' + this.lastname;
    }
    
}

var rahul = {
    firstname: 'Rahul',
    lastname:'Choudhary',
}

// dont do this ever for demo purpose only, as this will slow down the execution
rahul.__proto__ = person;

console.log(rahul.getFullName());

var shalu = {
    firstname: 'Rahul',
}

shalu.__proto__ = person;
console.log(shalu.getFullName());

Reflection:
-----------
An object can look at itself, listing and changing its properties and methods.

ThirtyFive Code:
----------------
app.js

var person = {
    
    firstname: 'Default',
    lastname:'Default',
    getFullName:  function(){
        return this.firstname + ' ' + this.lastname;
    }
    
}

var rahul = {
    firstname: 'Rahul',
    address:'Bareilly'
}

// using underscore .js for inheritance

_.extend(rahul,person);

console.log(rahul);

console.log(rahul.firstname);

console.log(rahul.address);

console.log(rahul.getFullName());

Building Objects:
-----------------
function constructor , new and history of js.

new will create a new empty object.

function B(){console.log(this);}
var a = new B();

new will create a new empty object with name B, and 'this' in function B will point to that new object.
whatever we set using 'this' on function B will set on new object B.
if we didnt return anything from function B, we will get the new Object B, but if return something than we will get that return value instead of new Object B.

Function Constructor:
---------------------
A normal function that is used to construct object.The 'this' variable points a new empty object, and that object is returned from the function automatically.

ThirtySix Code:
---------------
app.js

 function Person(firstname,lastname){
     
     console.log(this);
     
     this.firstname = firstname;
     this.lasname = lastname;
     
     console.log(this);
     
     /*return greet = {
         name:'hello'
     }*/
 }

var rahul = new Person('rahul','choudhary');

console.log('rahul object : ' + rahul.firstname + ' ' + rahul.lasname);

var shalu = new Person('shalu','choudhary');

console.log('shalu object : ' + shalu.firstname + ' ' + shalu.lasname);

what happen : new will create an empty object, Person{}.
Than function Person is invoked where 'this' point to Person{} empty object.
this.firstname and this.lastname is set on Object Person{}.
if we return greet which is comment in above code we will get : {name:'hello'}
if we didnt return anything than we will get : Person {firstname: "rahul", lasname: "choudhary"}


Function Constructor and Prototype:
-----------------------------------
from above code......
if we do rahul.__proto__ we will get empty Object Person{}.
whenever we use functions as function constructor we get specical property on function object.
we have name , code , call(), apply(), bind().
we also get prototype property, if we use function as function constructor.

We can add new method or property to function object that just created using new later on.

normally we put property inside function like we put firstname and lastname which used to change but we keep methods on prototype property of function (which is created using new keyword) so if create 1000 object of type person we need to provide the firstname and lastname but method which is common to all need not to repeat or contain by all 1000 objects which create a memory issue.We put the methods on prtotype property and all 1000 objects have access to prototype property.
just like we have static in java.

so we add prototype property on Person{} object that we get rahul.__proto__

Code Continue:
--------------
     function Person(firstname,lastname){

         console.log(this);

         this.firstname = firstname;
         this.lastname = lastname;

         console.log(this);

         /*return greet = {
             name:'hello'
         }*/
     }

    Person.prototype.getFullName = function(){return this.firstname + ' ' + this.lastname;}

    var rahul = new Person('rahul','choudhary');

    console.log('rahul object : ' + rahul.firstname + ' ' + rahul.lastname);

    var shalu = new Person('shalu','choudhary');

    console.log('shalu object : ' + shalu.firstname + ' ' + shalu.lastname);

    // on console
   /* 
    rahul.getFullName()
    "rahul choudhary"
    shalu.getFullName()
    "shalu choudhary"
   */

Person.prototype.getFormalFullName = function(){return this.lastname + ', ' + this.firstname;}

console.log(rahul.getFullName());
console.log(rahul.getFormalFullName());


Code Continue:
--------------
     function Person(firstname,lastname){

         console.log(this);

         this.firstname = firstname;
         this.lastname = lastname;

         console.log(this);

     }

    Person.prototype.getFullName = function(){return this.firstname + ' ' + this.lastname;}

    var rahul = Person('rahul','choudhary');

if we do like above than Person will run just a normal function and return undefined.
if we do console.log(rahul.getFullName());
that is like we do console.log(undefined.getFullName());
we will get Uncaught error : cannot read property getFullName of undefined.

So we always use First letter of function as capital letter for function constructor.

BuiltIn Function Constructor:
-----------------------------
new String('Rahul');
new Number(3);

String will convert to object if like var a = 'Rahul';
Number will not convert to Object like var a = 3;

We can add prototype to Number and String and add our custom methods as required.






















