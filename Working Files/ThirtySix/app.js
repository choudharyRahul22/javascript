     function Person(firstname,lastname){

         console.log(this);

         this.firstname = firstname;
         this.lastname = lastname;

         console.log(this);

         /*return greet = {
             name:'hello'
         }*/
     }

    Person.prototype.getFullName = function(){return this.firstname + ' ' + this.lastname;}

    var rahul = new Person('rahul','choudhary');

    console.log('rahul object : ' + rahul.firstname + ' ' + rahul.lastname);

    var shalu = new Person('shalu','choudhary');

    console.log('shalu object : ' + shalu.firstname + ' ' + shalu.lastname);

    // on console
   /* 
    rahul.getFullName()
    "rahul choudhary"
    shalu.getFullName()
    "shalu choudhary"
   */

Person.prototype.getFormalFullName = function(){return this.lastname + ', ' + this.firstname;}

console.log(rahul.getFullName());
console.log(rahul.getFormalFullName());