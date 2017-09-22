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


