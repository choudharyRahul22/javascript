function callback(){
    
    var greeting  = 'Rahul';
    console.log(greeting);
    
    setTimeout(function(){
        
        greeting = 'Shalu';
        console.log(greeting);
        
    },3000);
    
    
}

callback();