function b() {
    console.log('From b() ' + name)
}

function a() {
    var name = 'Rahul';
    console.log('From a() ' + name);
    b();
}

var name = 'Shalu';
console.log('Var name ' + name);

a();

