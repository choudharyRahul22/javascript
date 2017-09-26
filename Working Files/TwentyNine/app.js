function makeGreeting(language){
    
    return function(firstname,lastname){
        
        if(language === 'en')
            console.log('Hello ' + firstname + ' ' + lastname);
        
        if(language === 'es')
            console.log('Hola ' + firstname + ' ' + lastname);
        
    }
    
}

// 2 execution context will be created, one for greetEnglish and one for greetSpanish in memory.
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Rahul','Choudhary');
greetSpanish('Shalu','Choudhary');