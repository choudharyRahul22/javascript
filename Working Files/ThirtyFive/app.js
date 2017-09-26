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

//_.extend(rahul,person);

rahul.__proto__ = person;

console.log('-----------------');
for(var prop in rahul){
    console.log(prop + ' : ' + rahul[prop]);
}
console.log('-----------------');


console.log('-----------------');
for(var prop in rahul){
    if(rahul.hasOwnProperty(prop)){
    console.log(prop + ' : ' + rahul[prop]);
    }
}
console.log('-----------------');

console.log(rahul);

console.log(rahul.firstname);

console.log(rahul.address);

console.log(rahul.getFullName());





