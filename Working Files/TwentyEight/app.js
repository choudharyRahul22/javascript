// problem
function buildFunctions(){
    
    var arr = [];
    
    for(var i = 0 ; i < 3 ; i++ ) {
        arr.push(function(){
            console.log(i);
        });
    }
    
    return arr;
}

var returnVal = buildFunctions();

returnVal[0]();
returnVal[1]();
returnVal[2]();

console.log('----------------------')

// solution
function buildFunctions2(){
    
    var arr = [];
    
    for(var i = 0 ; i < 3 ; i++ ) {
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
             }(i))
        );
    }
    
    return arr;
}

var returnVal2 = buildFunctions2();

returnVal2[0]();
returnVal2[1]();
returnVal2[2]();

