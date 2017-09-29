// polyfill
if(!Object.create){
    Object.create = function(o){
        if(arguments.length > 1){
            throw new Error('Object.create implementation only takes the first parameter')
        }
        
        function F(){}
        
        F.prototype = o;
        
        return new F();
    }
}


var person = {
    firstname:'Default',
    lastname:'Default',
    greetName:function(){
        return 'Hi ' + this.firstname + ' ' + this.lastname;
    }
}

var rahul = Object.create(person);
console.log(rahul);
console.log(rahul.greetName());


rahul.firstname = 'Rahul';
rahul.lastname = 'Choudhary';
console.log(rahul);
console.log(rahul.greetName());

