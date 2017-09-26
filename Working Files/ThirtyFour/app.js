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
