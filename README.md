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

The Scope Chain:
