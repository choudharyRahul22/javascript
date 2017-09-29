Array.prototype.customField = 'Rahul';

var arr = ['shalu','ravi','vikas'];

for(var prop in arr){
    console.log(prop + ' : ' + arr[prop]);
}

console.log('----------------')

for (var i = 0 ; i < arr.length ; i++) {
    console.log(i + ' : ' + arr[i]);
}