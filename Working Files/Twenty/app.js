// this on global execution context point to window object.
console.log(this);

// function statement with this : this will point to window object
function a() {
    console.log(this);
    this.attchToGlobal = 'Global variable';
}

// function expression with this : this will point to window object
var b = function() {
    console.log(this);
}

a();
console.log(attchToGlobal);
b();

//
var c = {
    name: 'rahul',
    log: function(){
        console.log(this);
        this.name = 'shalu';
        console.log(this);
    } 
}

c.log();

// not a bug its how js engine behaves

console.log('*************************');

var d = {
    name: 'rahul',
    log: function(){
        console.log(this);
        this.name = 'shalu';
        console.log(this);
        
        var setName = function(name){
            // this will point to global window object, you can see the variable is set to global object
            this.name = name;
        }
        setName('new chnaged name');
        console.log(this);
    } 
}

d.log();
// setNmae function sets the name to window object/global object
console.log(name);

// overcome above by using self
console.log('*************************');
var e = {
    name: 'rahul',
    log: function(){
        var self = this;
        console.log(self);
        self.name = 'shalu';
        console.log(self);
        
        var setName = function(name){
            self.name = name;
        }
        setName('new chnaged name');
        console.log(self);
    } 
}

e.log();



