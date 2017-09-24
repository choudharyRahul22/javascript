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

//call

loggedName.call(person,'en','es');

// apply
loggedName.apply(person,['en','es']);

// other way issue IIFE
(
    function(language1 , language2){
    
    console.log('Logged Name : ' + this.getFullName());
    console.log('Arguments : ' + language1 + ' ' + language2);
    console.log('-----------------')
}
).apply(person,['Hindi','English']);

// function borrowing

var person2 = {
    
    firstname:'Shalu',
    lastname:'Choudhary',
    
}

console.log(person.getFullName.apply(person2));

// function curring
function multiply(a,b){
    return a*b;
}

var mul = multiply.bind(this,2);
console.log(mul(4));

var mul1 = multiply.bind(this,2,2);
console.log(mul1(3));



















