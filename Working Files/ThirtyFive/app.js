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





