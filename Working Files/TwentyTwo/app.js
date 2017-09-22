function greet(firstName, lastName, language) {
    
    language = language || 'English';
    
    if(arguments.length === 0){
        console.log('Missing Parameters');
        return;
    }
    
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);
    console.log('arg[0] : '+arguments[0]);
    console.log('-------------')
    
}

greet();
greet('Rahul');
greet('Rahul','Choudhary');
greet('Rahul','Choudhary','Hindi');