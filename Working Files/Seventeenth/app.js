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
