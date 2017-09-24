// first way 
var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];
for(var i=0; i < arr1.length ; i++){
    arr2.push(arr1[i] * 2);
}

console.log(arr2);


// second way
function mapForEach(array,fun){
    
    var newArray = [];
    
    for(var i=0; i < array.length ; i++){
       // console.log('Var i ' + i);
        newArray.push(fun(array[i]));
        
    }
    
    return newArray;
    
}

var copyArray = mapForEach(arr1,function(item){
    //console.log('Item ' + item);
    return item * 3;
})

var copyArray2 = mapForEach(arr1,function(item){
   // console.log('Item ' + item);
    return item > 2;
})

console.log(copyArray);
console.log('copyArray2 : ' + copyArray2);

var checkPassesLimit = function(limiter,item){
    return item > limiter;
}

var copyArray3 = mapForEach(arr1,checkPassesLimit.bind(this,1));
console.log('copyArray3 : ' + copyArray3);

var checkPassesLimitSimplified = function(limiter){
    return function(limiter,item){
    return item > limiter;
}.bind(this,limiter);
}

var copyArray4 = mapForEach(arr1,checkPassesLimitSimplified(2));
console.log('copyArray4 : ' + copyArray4);