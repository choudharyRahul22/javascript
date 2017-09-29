class Person {
    
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    greet(){
        return 'Hi ' + this.firstname + ' ' + this.lastname;
    }
    
}

var rahul = new Person('Rahul','Choudhary');
console.log(rahul);
console.log(rahul.greet());

// inheritance 
class InformalPerson extends Person {
    
    constructor(firstname,lastname){
        super(firstname,lastname);
    }
    
    greet(){
        return 'Hi from InformalPerson ' + this.firstname + ' ' + this.lastname;
    }
    
} 

var shalu = new Person('Shalu','Choudhary');
console.log(shalu);
console.log(shalu.greet());
