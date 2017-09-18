# javascript

JavaScript:
-----------

Syntax Parser: When you write a code your code will be check character by character like function make(), f then u then n so on and once function is find, it finds it a valid syntax and will look for a space than.
This is done by the compiler and interpreter, these are programs which will read your code and change it to machine undersatnable.

Lexical Environment: Lexical means 'having to do with words or grammer'. A lexical environment is exist in programming languages in which 'where you write something is important'.
Like finction make(){ var a = 'Rahul';}
here var a is sitting inside a function make.

Execution Context : A wrapper to help manage the code that is running.There are lots of lexiacl environment, which one is currently running is managed via execution context.It contain things that are beyond what you have written in your code.

Name Value Pair: A name which maps to unique value.The name may be defined more than once, but only can have one value in any given context.
Value may be more name value pair.

Objects: Collecions of name value pair.

The Global Environment & Global Object: When our code runs inside a execution context, there were more than one execution context but here we are going to look at base execution conext that is global execution context.
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

Global : "Not inside a function"

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
1. Execution context is created in 2 phase 
	a.Creation Phase: In creation phase js engine create global object , this, outer environmet, sets up memory space for functions and variables know as 'Hoisting'.
	so when we sets up memory sapce for variables we dont know what its value so it assign undefined all variables.
	However, only the declaration part is being hoisted; the assignment, on the other hand, is not.

	b.Execution Phase: In execution phase js engine create global object , this, outer environmet, and runs your code.

If we reomve line 76 (var name = 'Rahul Choudhary';) we will get Uncaught ErrorReference : name is not defined.

Single Threaded: One Command At A Time.Javascript behave in a single threaded manner, but browser is not single threaded.

Synchronus Execution: Synchronus means one at a time and in order.

Function Invocation: Invocation means running a function by using function name ()

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

Variable Environment: where the variables lives

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

The Scope Chain: scope means where i can access a variable and scope chain means access chain for example.

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

Asynchronous Callback: More than one at a time, The browser has rendring engine, javascript engine and http request which all works asynchronously.
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

Types and Javascript: Dynamic Typing : you dont tell the engine what tyoe of data a variable holds, it figures it out while your code is running.

Primitve Types in javascript : A type of data that represents a single value, that is not a object (a key value pair).
1.undefined : varaible sets initially
2.null : sets variable to nothing
3.boolean : true or false
4.number : floating point number
5.String : sequence of charater both in single and double quotes
6.symbol : used in ES6, not support by all browsers.

Operators: A special function that is written differently, genrally operator takes 2 parameters and return 1 result.
operators are functions, + is function which take 2 variable and return a number
+(3,4) prefix notation
(3,4)+ postfix notation
3 + 4  infix notation 

similarly there are other functions like > which take 2 argument and return boolean
var a = 4 > 3;
console.log(a); true






