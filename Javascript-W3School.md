JavaScript W3School:
--------------------
1.JavaScript Can Change HTML Content

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>

2. JavaScript Can Change HTML Styles (CSS)

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>


</body>
</html> 

3. JavaScript Can Change HTML Attributes

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attributes.</p>

<p>In this case JavaScript changes the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html>

4. JavaScript Can Change HTML Styles (CSS)

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>


</body>
</html> 

5. JavaScript Can Hide HTML Elements

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can hide HTML elements.</p>

<button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>


</body>
</html> 

6. JavaScript Can Show HTML Elements

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can show hidden HTML elements.</p>

<p id="demo" style="display:none">Hello JavaScript!</p>

<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>

</body>
</html> 

7. The <script> Tag
In HTML, JavaScript code must be inserted between <script> and </script> tags.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript in Body</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

</body>
</html> 

8. JavaScript in <head>

<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>

<body>

<h2>JavaScript in Head</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

</body>
</html> 

9. JavaScript in <body>

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript in Body</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html> 

10. External JavaScript

External file: myScript.js
function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}

<!DOCTYPE html>
<html>
<body>

<script src="myScript.js"></script>

</body>
</html>

11. JavaScript Display Possibilities

JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().

Using document.write()
<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html> 

Using document.write() after an HTML document is fully loaded, will delete all existing HTML:
<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My first paragraph.</p>

<button type="button" onclick="document.write(5 + 6)">Try it</button>

</body>
</html> 

Using window.alert()
<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html> 

Using console.log()
<!DOCTYPE html>
<html>
<body>

<h2>Activate debugging with F12</h2>

<p>Select "Console" in the debugger menu. Then click Run again.</p>

<script>
console.log(5 + 6);
</script>

</body>
</html> 

12. JavaScript Comments : 

Code after double slashes // or between /* and */ is treated as a comment.

13. JavaScript is Case Sensitive

The variables lastName and lastname, are two different variables.

14. JavaScript Events

HTML events are "things" that happen to HTML elements.
When JavaScript is used in HTML pages, JavaScript can "react" on these events.

An HTML event can be something the browser does, or something a user does.
Here are some examples of HTML events:

An HTML web page has finished loading
An HTML input field was changed
An HTML button was clicked

Often, when events happen, you may want to do something.
JavaScript lets you execute code when events are detected.

<!DOCTYPE html>
<html>
<body>

<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>

<p id="demo"></p>

</body>
</html>

In the next example, the code changes the content of its own element (using this.innerHTML):
<!DOCTYPE html>
<html>
<body>

<button onclick="this.innerHTML=Date()">The time is?</button>

</body>
</html>

Common HTML Events
Here is a list of some common HTML events:

Event	    Description
--------------------------------------------
onchange	An HTML element has been changed
onclick	    The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	    The browser has finished loading the page

DOM: Indicates in which DOM Level the property was introduced.

Mouse Events
Event	           Description	                                                                                         DOM
onclick	           The event occurs when the user clicks on an element	                                                 2
oncontextmenu	   The event occurs when the user right-clicks on an element to open a context menu	                     3
ondblclick	       The event occurs when the user double-clicks on an element	                                         2
onmousedown	       The event occurs when the user presses a mouse button over an element	                             2
onmouseenter	   The event occurs when the pointer is moved onto an element	                                         2
onmouseleave	   The event occurs when the pointer is moved out of an element	                                         2
onmousemove	       The event occurs when the pointer is moving while it is over an element	                             2
onmouseover	       The event occurs when the pointer is moved onto an element, or onto one of its children	             2
onmouseout	       The event occurs when a user moves the mouse pointer out of an element, or out of one of its children 2
onmouseup	       The event occurs when a user releases a mouse button over an element	                                 2

onclick Event:
--------------
Execute a JavaScript when a button is clicked:
<!DOCTYPE html>
<html>
<body>

<p>Click the button to trigger a function that will output "Hello World" in a p element with id="demo".</p>

<button onclick="myFunction()">Click me</button>

<p id="demo"></p>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
</script>

</body>
</html>

Execute a JavaScript when a element is clicked:
<!DOCTYPE html>
<html>
<body>

<p>This example demonstrates how to assign an "onclick" event to a p element.</p>

<p id="demo" onclick="myFunction()">Click me.</p>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
</script>

</body>
</html>

This example uses the HTML DOM to assign an "onclick" event to a p element.
<!DOCTYPE html>
<html>
<body>

<p>This example uses the HTML DOM to assign an "onclick" event to a p element.</p>

<p id="demo">Click me.</p>

<script>
document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
</script>

</body>
</html>

This example uses the addEventListener() method to attach a "click" event to a p element.
<!DOCTYPE html>
<html>
<body>

<p>This example uses the addEventListener() method to attach a "click" event to a p element.</p>

<p id="demo">Click me.</p>

<script>
document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
</script>

</body>
</html>

Click on a <p> element to change its text color to red:
<!DOCTYPE html>
<html>
<body>

<p id="demo" onclick="myFunction()">Click me to change my text color.</p>

<script>
function myFunction() {
    document.getElementById("demo").style.color = "red";
}
</script>

</body>
</html>

Another example on how to change the color of a <p> element by clicking on it:
<!DOCTYPE html>
<html>
<body>

<p onclick="myFunction(this, 'red')">Click me to change my text color.</p>

<script>
function myFunction(elmnt,clr) {
    elmnt.style.color = clr;
}
</script>

</body>
</html>

Click on a button to copy some text from an input field to another input field:
<!DOCTYPE html>
<html>
<body>

Field1: <input type="text" id="field1" value="Hello World!"><br>
Field2: <input type="text" id="field2"><br><br>

<button onclick="myFunction()">Copy Text</button>

<p>A function is triggered when the button is clicked. The function copies the text from Field1 into Field2.</p>

<script>
function myFunction() {
    document.getElementById("field2").value = document.getElementById("field1").value;
}
</script>

</body>
</html>

Assign the "onclick" event to the window object:
<!DOCTYPE html>
<html>
<body>

<p>This example demonstrates how to assign an "onclick" event to the window object.</p>

<p>Click anywhere in this window to change the background color of body.</p>

<script>
window.onclick = myFunction;

function myFunction() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
}
</script>

</body>
</html>

Using onclick to create a dropdown button:
<!DOCTYPE html>
<html>
<head>
<style>
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
    background-color: #3e8e41;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.show {display:block;}
</style>
</head>
<body>

<h2>Clickable Dropdown</h2>
<p>Click on the button to open the dropdown menu.</p>

<div class="dropdown">
<button id="myBtn" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>

<script>
// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
</script>

</body>
</html>


oncontextmenu:
--------------
The oncontextmenu event occurs when the user right-clicks on an element to open the context menu.
Note: Although the oncontextmenu event is supported in all browsers, the contextmenu attribute is currently only supported in Firefox.

<!DOCTYPE html>
<html>
<head>
<style>
div {
    background: yellow;
    border: 1px solid black;
    padding: 10px;
}
</style>
</head>
<body>

<div contextmenu="mymenu">
<p>Right-click inside this box to see the context menu!

<menu type="context" id="mymenu">
  <menuitem label="Refresh" onclick="window.location.reload();" icon="ico_reload.png"></menuitem>
  <menu label="Share on...">
    <menuitem label="Twitter" icon="ico_twitter.png" onclick="window.open('//twitter.com/intent/tweet?text=' + window.location.href);"></menuitem>
    <menuitem label="Facebook" icon="ico_facebook.png" onclick="window.open('//facebook.com/sharer/sharer.php?u=' + window.location.href);"></menuitem>
  </menu>
  <menuitem label="Email This Page" onclick="window.location='mailto:?body='+window.location.href;"></menuitem>
</menu>

</div>

<script>
function myFunction() {
    alert("You right-clicked inside the div!");
}
</script>

<p><strong>Note:</strong> The contextmenu <strong>attribute</strong> only works in Firefox!</p>

</body>
</html>

ondblclick Event:
-----------------
<!DOCTYPE html>
<html>
<body>

<p ondblclick="myFunction()">Double-click this paragraph to trigger a function.</p>

<p id="demo"></p>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
</script>

</body>
</html>

add event listner 'double click'
<!DOCTYPE html>
<html>
<body>

<p>This example uses the addEventListener() method to attach a "dblclick" event to a p element.</p>

<p id="demo">Double-click me.</p>

<script>
document.getElementById("demo").addEventListener("dblclick", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "I was double-clicked!";
}
</script>

</body>
</html>

onmousedown Event:
------------------

The onmousedown event occurs when a user presses a mouse button over an element.

Tip: The order of events related to the onmousedown event (for the left/middle mouse button):
onmousedown
onmouseup
onclick

The order of events related to the onmousedown event (for the right mouse button):
onmousedown
onmouseup
oncontextmenu

<!DOCTYPE html>
<html>
<body>

<p id="myP" onmousedown="mouseDown()" onmouseup="mouseUp()">
Click the text! The mouseDown() function is triggered when the mouse button is pressed down over this paragraph, and sets the color of the text to red. The mouseUp() function is triggered when the mouse button is released, and sets the color of the text to green.
</p>

<script>
function mouseDown() {
    document.getElementById("myP").style.color = "red";
}

function mouseUp() {
    document.getElementById("myP").style.color = "green";
}
</script>

</body>
</html>


Same with event listner:
<!DOCTYPE html>
<html>
<body>

<p>This example uses the addEventListener() method to attach a "mousedown" and "mouseup" event to a p element.</p>

<p id="demo">Click me.</p>

<script>
document.getElementById("demo").addEventListener("mousedown", mouseDown);
document.getElementById("demo").addEventListener("mouseup", mouseUp);

function mouseDown() {
    document.getElementById("demo").innerHTML = "The mouse button is held down.";
}

function mouseUp() {
    document.getElementById("demo").innerHTML = "You released the mouse button.";
}
</script>

</body>
</html>

Trigger a function with parameters when the button is pressed down:
<!DOCTYPE html>
<html>
<body>

<p onmousedown="myFunction(this,'red')" onmouseup="myFunction(this,'green')">
Click the text to change the color. A function, with parameters, is triggered when the mouse button is pressed down, and again, with other parameters, when the mouse button is released.
</p>

<script>
function myFunction(elmnt,clr) {
    elmnt.style.color = clr;
}
</script>

</body>
</html>

onmouseenter Event:
------------------
The onmouseenter event occurs when the mouse pointer is moved onto an element.

Tip: This event is often used together with the onmouseleave event, which occurs when the mouse pointer is moved out of an element.
Tip: The onmouseenter event is similar to the onmouseover event. The only difference is that the onmouseenter event does not bubble (does not propagate up the document hierarchy). 

<!DOCTYPE html>
<html>
<body>

<img onmouseenter="bigImg(this)" onmouseleave="normalImg(this)" border="0" src="smiley.gif" alt="Smiley" width="32" height="32">

<p>The function bigImg() is triggered when the user moves the mouse pointer onto the image.</p>
<p>The function normalImg() is triggered when the mouse pointer is moved out of the image.</p>

<script>
function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}

function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}
</script>

</body>
</html>

with add event listner
<!DOCTYPE html>
<html>
<body>

<p>This example uses the addEventListener() method to attach a "mouseenter" and "mouseleave" event to a h1 element.</p>

<h1 id="demo">Mouse over me</h1>

<script>
document.getElementById("demo").addEventListener("mouseenter", mouseEnter);
document.getElementById("demo").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    document.getElementById("demo").style.color = "red";
}

function mouseLeave() {
    document.getElementById("demo").style.color = "black";
}
</script>

</body>
</html>

This example demonstrates the difference between the onmousemove, onmouseenter and mouseover events:
<!DOCTYPE html>
<html>
<head>
<style>
div {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    margin: 10px;
    float: left;
    padding: 30px;
    text-align: center;
    background-color: lightgray;
}

p {
    background-color: white;
}
</style>
</head>
<body>

<h3>This example demonstrates the difference between onmousemove, onmouseenter and onmouseover.</h3>

<p>The onmousemove event occurs every time the mouse pointer is moved over the div element.</p>

<p>The mouseenter event only occurs when the mouse pointer enters the div element. </p>

<p>The onmouseover event occurs when the mouse pointer enters the div element, and its child elements (p and span).</p>

<div onmousemove="myMoveFunction()">
  <p>onmousemove: <br> <span id="demo">Mouse over me!</span></p>
</div>

<div onmouseenter="myEnterFunction()">
  <p>onmouseenter: <br> <span id="demo2">Mouse over me!</span></p>
</div>

<div onmouseover="myOverFunction()">
  <p>onmouseover: <br> <span id="demo3">Mouse over me!</span></p>
</div>

<script>
var x = 0;
var y = 0;
var z = 0;

function myMoveFunction() {
    document.getElementById("demo").innerHTML = z+=1;
}

function myEnterFunction() {
    document.getElementById("demo2").innerHTML = x+=1;
}

function myOverFunction() {
    document.getElementById("demo3").innerHTML = y+=1;
}
</script>

</body>
</html>

onmousemove Event:
-----------------
The onmousemove event occurs when the pointer is moving while it is over an element.

<!DOCTYPE html>
<html>
<head>
<style>
div {
    width: 200px;
    height: 100px;
    border: 1px solid black;
}
</style>
</head>
<body>

<div onmousemove="myFunction(event)" onmouseout="clearCoor()"></div>

<p>Mouse over the rectangle above, and get the coordinates of your mouse pointer.</p>

<p>When the mouse is moved over the div, the p element will display the horizontal and vertical coordinates of your mouse pointer, whose values are returned from the clientX and clientY properties on the 
MouseEvent object.</p>

<p id="demo"></p>

<script>
function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor;
}

function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}
</script>

</body>
</html>


This example demonstrates the difference between the onmousemove, onmouseleave and onmouseout events:
<!DOCTYPE html>
<html>
<head>
<style>
div {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    margin: 10px;
    float: left;
    padding: 30px;
    text-align: center;
    background-color: lightgray;
}

p {
    background-color: white;
}
</style>
</head>
<body>

<h3>This example demonstrates the difference between onmousemove, onmouseleave and onmouseout.</h3>

<p>The onmousemove event occurs every time the mouse pointer is moved over the div element.</p>

<p>The mouseleave event only occurs when the mouse pointer is moved out of the div element. </p>

<p>The onmouseout event occurs when the mouse pointer is moved out of the div element, and when it 
leaves its child elements (p and span).</p>

<div onmousemove="myMoveFunction()">
  <p>onmousemove: <br> <span id="demo">Mouse over and leave me!</span></p>
</div>

<div onmouseleave="myLeaveFunction()">
  <p>onmouseleave: <br> <span id="demo2">Mouse over and leave me!</span></p>
</div>

<div onmouseout="myOutFunction()">
  <p>onmouseout: <br> <span id="demo3">Mouse over and leave me!</span></p>
</div>

<script>
var x = 0;
var y = 0;
var z = 0;

function myMoveFunction() {
    document.getElementById("demo").innerHTML = z+=1;
}

function myLeaveFunction() {
    document.getElementById("demo2").innerHTML = x+=1;
}

function myOutFunction() {
    document.getElementById("demo3").innerHTML = y+=1;
}
</script>

</body>
</html>

This example demonstrates the difference between the onmousemove, onmouseenter and mouseover events:
<!DOCTYPE html>
<html>
<head>
<style>
div {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    margin: 10px;
    float: left;
    padding: 30px;
    text-align: center;
    background-color: lightgray;
}

p {
    background-color: white;
}
</style>
</head>
<body>

<h3>This example demonstrates the difference between onmousemove, onmouseenter and onmouseover.</h3>

<p>The onmousemove event occurs every time the mouse pointer is moved over the div element.</p>

<p>The mouseenter event only occurs when the mouse pointer enters the div element. </p>

<p>The onmouseover event occurs when the mouse pointer enters the div element, and its child elements (p and span).</p>

<div onmousemove="myMoveFunction()">
  <p>onmousemove: <br> <span id="demo">Mouse over me!</span></p>
</div>

<div onmouseenter="myEnterFunction()">
  <p>onmouseenter: <br> <span id="demo2">Mouse over me!</span></p>
</div>

<div onmouseover="myOverFunction()">
  <p>onmouseover: <br> <span id="demo3">Mouse over me!</span></p>
</div>

<script>
var x = 0;
var y = 0;
var z = 0;

function myMoveFunction() {
    document.getElementById("demo").innerHTML = z+=1;
}

function myEnterFunction() {
    document.getElementById("demo2").innerHTML = x+=1;
}

function myOverFunction() {
    document.getElementById("demo3").innerHTML = y+=1;
}
</script>

</body>
</html>



Keyboard Events
Event	    Description	                                        DOM
onkeydown	The event occurs when the user is pressing a key	2
onkeypress	The event occurs when the user presses a key	    2
onkeyup	    The event occurs when the user releases a key	    2

onkeydown Event:
----------------
The onkeydown event occurs when the user is pressing a key (on the keyboard).

Tip: The order of events related to the onkeydown event:

onkeydown
onkeypress
onkeyup

<!DOCTYPE html>
<html>
<body>

<p>A function is triggered when the user is pressing a key in the input field.</p>

<input type="text" onkeydown="myFunction()">

<script>
function myFunction() {
    alert("You pressed a key inside the input field");
}
</script>

</body>
</html>

attach event listner:
<!DOCTYPE html>
<html>
<body>

<p>This example uses the addEventListener() method to attach a "keydown" event to an input element.</p>

<p>Press a key inside the text field to set a red background color.</p>

<input type="text" id="demo">

<script>
document.getElementById("demo").addEventListener("keydown", myFunction);

function myFunction() {
    document.getElementById("demo").style.backgroundColor = "red";
}
</script>

</body>
</html>

Using "onkeydown" together with the "onkeyup" event:

<!DOCTYPE html>
<html>
<body>

<p>Press and hold down a key inside the text field to set a red background color. Release the key to set a green background color.</p>

<input type="text" id="demo" onkeydown="keydownFunction()" onkeyup="keyupFunction()">

<script>
function keydownFunction() {
    document.getElementById("demo").style.backgroundColor = "red";
}

function keyupFunction() {
    document.getElementById("demo").style.backgroundColor = "green";
}
</script>

</body>
</html>

onkeypress Event:
-----------------
The onkeypress event occurs when the user presses a key (on the keyboard).

Tip: The order of events related to the onkeypress event:

onkeydown
onkeypress
onkeyup
Note: The onkeypress event is not fired for all keys (e.g. ALT, CTRL, SHIFT, ESC) in all browsers. To detect only whether the user has pressed a key, use the onkeydown event instead, because it works for all keys.

<!DOCTYPE html>
<html>
<body>

<p>A function is triggered when the user is pressing a key in the input field.</p>

<input type="text" onkeypress="myFunction()">

<script>
function myFunction() {
    alert("You pressed a key inside the input field");
}
</script>

</body>
</html>


Frame/Object Events
Event	        Description	DOM
onabort	        The event occurs when the loading of a resource has been aborted	2
onbeforeunload	The event occurs before the document is about to be unloaded	2
onerror	        The event occurs when an error occurs while loading an external file	2
onhashchange	The event occurs when there has been changes to the anchor part of a URL	3
onload	        The event occurs when an object has loaded	2
onpageshow	    The event occurs when the user navigates to a webpage	3
onpagehide	    The event occurs when the user navigates away from a webpage	3
onresize	    The event occurs when the document view is resized	2
onscroll	    The event occurs when an element's scrollbar is being scrolled	2
onunload	    The event occurs once a page has unloaded (for <body>)	2

onbeforeunload:
---------------

The onbeforeunload event occurs when the document is about to be unloaded.
This event allows you to display a message in a confirmation dialog box to inform the user whether he/she wants to stay or leave the current page.
The default message that appears in the confirmation box, is different in different browsers. However, the standard message is something like "Are you sure you want to leave this page?". This message cannot be removed.
However, you can write a custom message together with the default message. See the first example on this page. Note: This only works in Internet Explorer.

Note: If the onbeforeunload event is not assigned to the <body> element, you must assign/attach the event on the window object, and use the returnValue property to create a custom message (see syntax examples below).

<!DOCTYPE html>
<html>
<body onbeforeunload="return myFunction()">

<p>Close this window, press F5 or click on the link below to invoke the onbeforeunload event.</p>

<a href="https://www.w3schools.com">Click here to go to w3schools.com</a>
      
<script>
function myFunction() {
    return "Write something clever here...";
}
</script>

</body>
</html>

onerror Event:
--------------
The onerror event is triggered if an error occurs while loading an external file (e.g. a document or an image).

<!DOCTYPE html>
<html>
<body>

<img src="image.gif" onerror="myFunction()">

<p>A function is triggered if an error occurs when loading the image. The function shows an alert box with a text.
In this example we refer to an image that does not exist, therefore the onerror event occurs.</p>

<script>
function myFunction() {
    alert('The image could not be loaded.');
}
</script>

</body>
</html>


onhashchange Event:
-------------------
The onhashchange event occurs when there has been changes to the anchor part (begins with a '#' symbol) of the current URL.

An example of what an anchor part actually is: Assume that the current URL is
http://www.example.com/test.htm#part2 - The anchor part of this URL would be #part2.

To invoke this event, you can:

Change the anchor part by setting the location.hash or location.href property of the Location Object
Navigate to the current page with a different bookmark (Use the "back" or "forward" buttons)
Click on a link to a bookmark anchor

<!DOCTYPE html>
<html>
<body onhashchange="myFunction()">

<p>Click the button to change the anchor part of the current URL to #part5</p>

<button onclick="changePart()">Try it</button>

<p id="demo"></p>

<script>
// Using the location.hash property to change the anchor part
function changePart() {
    location.hash = "part5";
    var x = location.hash;
    document.getElementById("demo").innerHTML = "The anchor part is now: " + x;
}

// Alert some text if there has been changes to the anchor part
function myFunction() {
    alert("The anchor part has changed!");
}
</script>

</body>
</html>


onload Event:
-------------
The onload event occurs when an object has been loaded.

onload is most often used within the <body> element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.).

The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

The onload event can also be used to deal with cookies (see "More Examples" below).

<!DOCTYPE html>
<html>
<body onload="myFunction()">

<h1>Hello World!</h1>

<script>
function myFunction() {
    alert("Page is loaded");
}
</script>

</body>
</html>

Using onload on an <img> element. Alert "Image is loaded" immediately after an image has been loaded:
<!DOCTYPE html>
<html>
<body>

<img src="w3javascript.gif" onload="loadImage()" width="100" height="132">

<script>
function loadImage() {
    alert("Image is loaded");
}
</script>

</body>
</html>

Using the onload event to deal with cookies:
<!DOCTYPE html>
<html>
<body onload="checkCookies()">

<p id="demo"></p>

<script>
function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html> 


onpageshow Event:
-----------------
The onpageshow event occurs when a user navigates to a webpage.

The onpageshow event is similar to the onload event, except that it occurs after the onload event when the page first loads. Also, the onpageshow event occurs every time the page is loaded, whereas the onload event does not occur when the page is loaded from the cache.

To find out if a page is loaded directly from the server or if the page is cached, you can use the persisted property of the PageTransitionEvent object. This property returns true if the page is cached by the browser, and false otherwise (see "More Examples" below).

<!DOCTYPE html>
<html>
<body onpageshow="myFunction()">

<h1>Hello World!</h1>

<p><strong>Note:</strong> The onpageshow event is not supported in Internet Explorer 10 and earlier versions.</p>

<script>
function myFunction() {
    alert("Welcome!");
}
</script>

</body>
</html>


Find out whether the page was cached by the browser:
<!DOCTYPE html>
<html>
<body onpageshow="myFunction(event)">

<h1>Hello World!</h1>

<p><strong>Note:</strong> The onpageshow event and the persisted property is not supported in Internet Explorer 10 and earlier versions.</p>

<script>
function myFunction(event) { 
    if (event.persisted) {
        alert("The page was cached by the browser");
    } else {
        alert("The page was NOT cached by the browser");
    }
}
</script>

</body>
</html>


onpagehide Event:
-----------------
The onpagehide event occurs when the user is navigating away from a webpage.

There are several ways to navigate away from a page. E.g. by clicking on a link, refreshing the page, submitting a form, closing the browser window, etc.

The onpagehide event is sometimes used instead of the onunload event, as the onunload event causes the page to not be cached.

To find out if a page is loaded directly from the server or if the page is cached, you can use the persisted property of the PageTransitionEvent object. This property returns true if the page is cached by the browser, and false otherwise.



onresize Event:
---------------
The onresize event occurs when the browser window has been resized.

Tip: To get the size of an element, use the clientWidth, clientHeight, innerWidth, innerHeight, outerWidth, outerHeight, offsetWidth and/or offsetHeight properties.

<!DOCTYPE html>
<html>
<body onresize="myFunction()">

<p>Try to resize the browser window to display the windows height and width.</p>

<p id="demo"></p>

<p><strong>Note:</strong> this example will not work properly in IE8 and earlier. IE8 and earlier do not support the outerWidth/outerHeight propery of the window object.</p>

<script>
function myFunction() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("demo").innerHTML = txt;
}
</script>

</body>
</html>


onscroll Event:
---------------
The onscroll event occurs when an element's scrollbar is being scrolled.

Tip: use the CSS overflow style property to create a scrollbar for an element.

<!DOCTYPE html>
<html>
<head>
<style>
div {
    border: 1px solid black;
    width: 200px;
    height: 100px;
    overflow: scroll;
}
</style>
</head>
<body>

<p>Try the scrollbar in div.</p>

<div onscroll="myFunction()">In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.
<br><br>
'Whenever you feel like criticizing anyone,' he told me, just remember that all the people in this world haven't had the advantages that you've had.'</div>

<p>Scrolled <span id="demo">0</span> times.</p>

<script>
var x = 0;
function myFunction() {
    document.getElementById("demo").innerHTML = x += 1;
}
</script>

</body>
</html>

Toggle between class names on different scroll positions - When the user scrolls down 50 pixels from the top of the page, the class name "test" will be added to an element (and removed when scrolled up again).
<!DOCTYPE html>
<html>
<head>
<style>
.test {
    background-color: yellow;
}
</style>
</head>
<body style="height:1500px">

<p>Scroll down this page</p>

<p id="myP" style="position:fixed">When you have scrolled 50 pixels from the top of this page, add the class "test" (yellow background color) to this paragraph. Scroll up again to remove the class.
</p>

<script>
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myP").className = "test";
    } else {
        document.getElementById("myP").className = "";
    }
}
</script>

</body>
</html>

Slide in an element when the user has scrolled down 350 pixels from the top of the page (add the slideUp class):
<!DOCTYPE html>
<html>
<head>
<style>
.slideUp {
    animation-name: slideUp;
    -webkit-animation-name: slideUp;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    visibility: visible;
}

@keyframes slideUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(70%);
    } 
    100% {
        opacity: 1;
        -webkit-transform: translateY(0%);
    }
}

@-webkit-keyframes slideUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(70%);
    } 
    100% {
        opacity: 1;
        -webkit-transform: translateY(0%);
    }
}

body {height:1500px;}
.col-1 {float:left}
.col-2 {float:left;padding-left:25px;}
img {width:180px;height:100px;visibility:hidden;}
hr {margin-top:400px;}
</style>
</head>
<body>

<p>Scroll down this page.</p>
<p>When you have scrolled 350px from the top, an image will slide in.</p>

<hr>
<div class="col-1">
  <img id="myImg" src="img_pulpit.jpg" width="304" height="228">
</div> 

<div class="col-2">
  Just some text..
</div>

<script>
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("myImg").className = "slideUp";
    }
}
</script>

</body>
</html>

onunload Event:
---------------
The onunload event occurs once a page has unloaded (or the browser window has been closed).

onunload occurs when the user navigates away from the page (by clicking on a link, submitting a form, closing the browser window, etc.).

Note: The onunload event is also triggered when a user reloads the page (and the onload event).

<!DOCTYPE html>
<html>
<body onunload="myFunction()">

<h1>Welcome to my Home Page</h1>

<p>Close this window or press F5 to reload the page.</p>
<p><strong>Note:</strong> Due to different browser settings, this event may not always work as expected.</p>

<script>
function myFunction() {
    alert("Thank you for visiting W3Schools!");
}
</script>

</body>
</html>


Form Events
Event	    Description	DOM
onblur	    The event occurs when an element loses focus	2
onchange	The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <keygen>, <select>, and <textarea>)	2
onfocus	    The event occurs when an element gets focus	2
onfocusin	The event occurs when an element is about to get focus	2
onfocusout	The event occurs when an element is about to lose focus	2
oninput	    The event occurs when an element gets user input	3
oninvalid	The event occurs when an element is invalid	3
onreset	    The event occurs when a form is reset	2
onsearch	The event occurs when the user writes something in a search field (for <input="search">)	3
onselect	The event occurs after the user selects some text (for <input> and <textarea>)	2
onsubmit	The event occurs when a form is submitted	2

onblur Event:
-------------
The onblur event occurs when an object loses focus.
The onblur event is most often used with form validation code (e.g. when the user leaves a form field).

Tip: The onblur event is the opposite of the onfocus event.

Tip: The onblur event is similar to the onfocusout event. The main difference is that the onblur event does not bubble. Therefore, if you want to find out whether an element or its child loses focus, you could use the onfocusout event. However, you can achieve this by using the optional useCapture parameter of the addEventListener() method for the onblur event.

<!DOCTYPE html>
<html>
<body>

Enter your name: <input type="text" id="fname" onblur="myFunction()">

<p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>

<script>
function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
</script>

</body>
</html>

Using "onblur" together with the "onfocus" event:
<!DOCTYPE html>
<html>
<body>

<p>When you enter the input field, a function is triggered which sets the background color to yellow. When you leave the input field, a function is triggered which sets the background color to red.</p>

Enter your name: <input type="text" id="myInput" onfocus="focusFunction()" onblur="blurFunction()">

<script>
function focusFunction() {
    // Focus = Changes the background color of input to yellow
    document.getElementById("myInput").style.background = "yellow";
}

function blurFunction() {
    // No focus = Changes the background color of input to red
    document.getElementById("myInput").style.background = "red";
}
</script>

</body>
</html>

Event delegation: setting the useCapture parameter of addEventListener() to true:
<!DOCTYPE html>
<html>
<body>

<p>When you enter the input field (child of FORM), a function is triggered which sets the background color to yellow. When you leave the input field, a function is triggered which removes the background color.</p>

<form id="myForm">
  <input type="text" id="myInput">
</form>

<script>
var x = document.getElementById("myForm");
x.addEventListener("focus", myFocusFunction, true);
x.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
    document.getElementById("myInput").style.backgroundColor = "yellow";  
}

function myBlurFunction() {
    document.getElementById("myInput").style.backgroundColor = "";  
}
</script>

</body>
</html>

Event delegation: using the focusin event (not supported by Firefox):
<!DOCTYPE html>
<html>
<body>

<p>When you enter the input field (child of FORM), a function is triggered which sets the background color to yellow. When you leave the input field, a function is triggered which removes the background color.</p>

<form id="myForm">
  <input type="text" id="myInput">
</form>

<script>
var x = document.getElementById("myForm");
x.addEventListener("focusin", myFocusFunction);
x.addEventListener("focusout", myBlurFunction);

function myFocusFunction() {
    document.getElementById("myInput").style.backgroundColor = "yellow";  
}

function myBlurFunction() {
    document.getElementById("myInput").style.backgroundColor = "";  
}
</script>

</body>
</html>


onchange Event:
---------------
The onchange event occurs when the value of an element has been changed.

For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.

Tip: This event is similar to the oninput event. The difference is that the oninput event occurs immediately after the value of an element has changed, while onchange occurs when the element loses focus, after the content has been changed. The other difference is that the onchange event also works on <keygen> and <select> elements.

<!DOCTYPE html>
<html>
<body>

<p>Select a new car from the list.</p>

<select id="mySelect" onchange="myFunction()">
  <option value="Audi">Audi
  <option value="BMW">BMW
  <option value="Mercedes">Mercedes
  <option value="Volvo">Volvo
</select>

<p>When you select a new car, a function is triggered which outputs the value of the selected car.</p>

<p id="demo"></p>

<script>
function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
}
</script>

</body>
</html>

Execute a JavaScript when a user changes the content of an input field:
<!DOCTYPE html>
<html>
<body>

<p>Modify the text in the input field, then click outside the field to fire the onchange event.</p>

Enter some text: <input type="text" name="txt" value="Hello" onchange="myFunction(this.value)">

<script>
function myFunction(val) {
    alert("The input value has changed. The new value is: " + val);
}
</script>

</body>
</html>

onfocus Event:
--------------
The onfocus event occurs when an element gets focus.

The onfocus event is most often used with <input>, <select>, and <a>.

Tip: The onfocus event is the opposite of the onblur event.

Tip: The onfocus event is similar to the onfocusin event. The main difference is that the onfocus event does not bubble. Therefore, if you want to find out whether an element or its child gets the focus, you could use the onfocusin event. However, you can achieve this by using the optional useCapture parameter of the addEventListener() method for the onfocus event.

<!DOCTYPE html>
<html>
<body>

Enter your name: <input type="text" onfocus="myFunction(this)">

<p>When the input field gets focus, a function is triggered which changes the background-color.</p>

<script>
function myFunction(x) {
    x.style.background = "yellow";
}
</script>

</body>
</html>


Using "onfocus" together with the "onblur" event:
<!DOCTYPE html>
<html>
<body>

<p>When you enter the input field, a function is triggered which sets the background color to yellow. When you leave the input field, a function is triggered which sets the background color to red.</p>

Enter your name: <input type="text" id="myInput" onfocus="focusFunction()" onblur="blurFunction()">

<script>
function focusFunction() {
    // Focus = Changes the background color of input to yellow
    document.getElementById("myInput").style.background = "yellow";
}

function blurFunction() {
    // No focus = Changes the background color of input to red
    document.getElementById("myInput").style.background = "red";
}
</script>

</body>
</html>



Drag Events
Event	    Description	DOM
ondrag	    The event occurs when an element is being dragged	3
ondragend	The event occurs when the user has finished dragging an element	3
ondragenter	The event occurs when the dragged element enters the drop target	3
ondragleave	The event occurs when the dragged element leaves the drop target	3
ondragover	The event occurs when the dragged element is over the drop target	3
ondragstart	The event occurs when the user starts to drag an element	3
ondrop	    The event occurs when the dragged element is dropped on the drop target	3

Clipboard Events
Event	Description	DOM
oncopy	The event occurs when the user copies the content of an element	 
oncut	The event occurs when the user cuts the content of an element	 
onpaste	The event occurs when the user pastes some content in an element

Print Events
Event	        Description	DOM
onafterprint	The event occurs when a page has started printing, or if the print dialogue box has been closed	3
onbeforeprint	The event occurs when a page is about to be printed	3

Media Events
Event	            Description	DOM
onabort	            The event occurs when the loading of a media is aborted	3
oncanplay	        The event occurs when the browser can start playing the media (when it has buffered enough to begin)	3
oncanplaythrough	The event occurs when the browser can play through the media without stopping for buffering	3
ondurationchange	The event occurs when the duration of the media is changed	3
onemptied	        The event occurs when something bad happens and the media file is suddenly unavailable (like unexpectedly disconnects)	3
onended	            The event occurs when the media has reach the end (useful for messages like "thanks for listening")	3
onerror          	The event occurs when an error occurred during the loading of a media file	3
onloadeddata	    The event occurs when media data is loaded	3
onloadedmetadata	The event occurs when meta data (like dimensions and duration) are loaded	3
onloadstart	        The event occurs when the browser starts looking for the specified media	3
onpause	            The event occurs when the media is paused either by the user or programmatically	3
onplay	            The event occurs when the media has been started or is no longer paused	3
onplaying	        The event occurs when the media is playing after having been paused or stopped for buffering	3
onprogress	        The event occurs when the browser is in the process of getting the media data (downloading the media)	3
onratechange	    The event occurs when the playing speed of the media is changed	3
onseeked	        The event occurs when the user is finished moving/skipping to a new position in the media	3
onseeking	        The event occurs when the user starts moving/skipping to a new position in the media	3
onstalled	        The event occurs when the browser is trying to get media data, but data is not available	3
onsuspend	        The event occurs when the browser is intentionally not getting media data	3
ontimeupdate	    The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)	3
onvolumechange	    The event occurs when the volume of the media has changed (includes setting the volume to "mute")	3
onwaiting	        The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)	3

Server-Sent Events
Event	  Description	DOM
onerror	  The event occurs when an error occurs with the event source	 
onmessage The event occurs when a message is received through the event source	 
onopen	  The event occurs when a connection with the event source is opened

Misc Events
Event	    Description	DOM
onmessage	The event occurs when a message is received through or from an object (WebSocket, Web Worker, Event Source or a child frame or a parent window)	3
onmousewheel	Deprecated. Use the onwheel event instead	 
ononline	The event occurs when the browser starts to work online	3
onoffline	The event occurs when the browser starts to work offline	3
onpopstate	The event occurs when the window's history changes	3
onshow	    The event occurs when a <menu> element is shown as a context menu	3
onstorage	The event occurs when a Web Storage area is updated	3
ontoggle	The event occurs when the user opens or closes the <details> element	3
onwheel	    The event occurs when the mouse wheel rolls up or down over an element	3

Event Object
Constants
Constant	Description	DOM
CAPTURING_PHASE	The current event phase is the capture phase (1)	1
AT_TARGET	The current event is in the target phase, i.e. it is being evaluated at the event target (2)	2
BUBBLING_PHASE	The current event phase is the bubbling phase (3)

Event Object
Properties
Property	     Description	DOM
bubbles	         Returns whether or not a specific event is a bubbling event	2
cancelable	     Returns whether or not an event can have its default action prevented	2
currentTarget	 Returns the element whose event listeners triggered the event	2
defaultPrevented Returns whether or not the preventDefault() method was called for the event	3
eventPhase	     Returns which phase of the event flow is currently being evaluated	2
isTrusted	     Returns whether or not an event is trusted	3
target	         Returns the element that triggered the event	2
timeStamp	     Returns the time (in milliseconds relative to the epoch) at which the event was created	2
type	         Returns the name of the event	2
view	         Returns a reference to the Window object where the event occured	2

Event Object
Methods
Method	                    Description	DOM
preventDefault()	        Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur	2
stopImmediatePropagation()	Prevents other listeners of the same event from being called	3
stopPropagation()	        Prevents further propagation of an event during event flow	2

MouseEvent Object
Property	    Description	DOM
altKey	        Returns whether the "ALT" key was pressed when the mouse event was triggered	2
button	        Returns which mouse button was pressed when the mouse event was triggered	2
buttons	        Returns which mouse buttons were pressed when the mouse event was triggered	3
clientX	        Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	2
clientY     	Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	2
ctrlKey	        Returns whether the "CTRL" key was pressed when the mouse event was triggered	2
detail	        Returns a number that indicates how many times the mouse was clicked	2
metaKey	        Returns whether the "META" key was pressed when an event was triggered	2
pageX	        Returns the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	 
pageY	        Returns the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	 
relatedTarget	Returns the element related to the element that triggered the mouse event	2
screenX	        Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered	2
screenY	        Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered	2
shiftKey	    Returns whether the "SHIFT" key was pressed when an event was triggered	2
which	        Returns which mouse button was pressed when the mouse event was triggered	2


KeyboardEvent Object
Property	Description	DOM
altKey	    Returns whether the "ALT" key was pressed when the key event was triggered	2
ctrlKey	    Returns whether the "CTRL" key was pressed when the key event was triggered	2
charCode	Returns the Unicode character code of the key that triggered the onkeypress event	2
key	Returns the key value of the key represented by the event	3
keyCode	    Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	2
location	Returns the location of a key on the keyboard or device	3
metaKey	    Returns whether the "meta" key was pressed when the key event was triggered	2
shiftKey	Returns whether the "SHIFT" key was pressed when the key event was triggered	2
which	    Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	2


HashChangeEvent Object
Property	Description	DOM
newURL	    Returns the URL of the document, after the hash has been changed	
oldURL	    Returns the URL of the document, before the hash was changed

PageTransitionEvent Object
Property	Description	DOM
persisted	Returns whether the webpage was cached by the browser

FocusEvent Object
Property	    Description	DOM
relatedTarget	Returns the element related to the element that triggered the event	3

WheelEvent Object
Property	Description	DOM
deltaX	    Returns the horizontal scroll amount of a mouse wheel (x-axis)	3
deltaY	    Returns the vertical scroll amount of a mouse wheel (y-axis)	3
deltaZ	    Returns the scroll amount of a mouse wheel for the z-axis	3
deltaMode	Returns a number that represents the unit of measurements for delta values (pixels, lines or pages)	3