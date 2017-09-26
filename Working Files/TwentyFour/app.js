function greet() {
    
    /* if we do like this syntax parser will put ; for us and code will return from line no 4 
    return
    {
        firstName:'Rahul'
    }*/
    
    // always use this way
    return {
        firstName:'Rahul'
    }
    
}

console.log(greet());