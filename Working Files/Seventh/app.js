

function a() {
    var name = 'Rahul';
    console.log('From a() ' + name);
    
    function b() {
    console.log('From b() ' + name)
    }
    
    b();
}

var name = 'Shalu';
console.log('Var name ' + name);

a();

