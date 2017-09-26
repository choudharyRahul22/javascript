// first way 
var arr1 = [1,2,3];
console.log(arr1);

// using underscore.js map function
console.log(_.map(arr1,function(item){return item*4; }));


// using underscore.js filter function
var allNumbers = [1,2,3,4,5,6,7,8,9,10];
console.log( _.filter(allNumbers,function(item){
                      return item % 2 === 0; }
                     ));

