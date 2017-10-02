(function(global,$){
    
   /* console.log(global);
    console.log($);*/
    
    var Greetr = function(firstName, lastName, language){
       // console.log('Greetr function called');
        return new Greetr.init(firstName,lastName,language);
    }
    
    var supportedLanguages = ['en','es'];
    
    var greetings = {
        en:'Hello',
        es:'Hola'
    };
    
    var formalGreetings = {
        en:'Greetings',
        es:'Saludos'
    };
    
    var logMessages = {
      en: 'Logged in',
      es: 'Inicio session'
    };
    
    Greetr.prototype = {
        
        fullName: function(){
          return this.firstName + ' ' + this.lastName;  
        },
        
        validate: function(){
            if(supportedLanguages.indexOf(this.language) === -1){
                throw 'Invalid Language';
            }
        },
        
        greetings: function(){
            return greetings[this.language] + ' ' + this.firstName;
        },
        
        formalGreetings: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        greet: function(formal){
            var msg;
            
            if(formal){
                msg = this.formalGreetings();
            }
            else{
                msg = this.greetings();
            }
            
            if(console){
                console.log(msg);
            }
            
            return this;
        },
        
        logMessage: function(){
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
            return this;
        },
        
        setLanguage: function(lang){
            
            this.language = lang;
            
            this.validate();
            
            return this;
        },
        
        HTMLGreeting: function(selector, formal){
            if(!$){
                throw 'Jquery not loaded';
            }
            
            if(!selector){
                throw 'jQuery selector missing';
            }
            
            var msg;
            
            if(formal){
                msg = this.formalGreetings();
            }
            else{
                msg = this.greetings();
            }
            
            $(selector).html(msg);
            
            return this;
        }
    };
    
    Greetr.init = function(firstName,lastName,language){
        //console.log('Greetr.init function called');
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        self.validate();
    }
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
}(window,jQuery)
)