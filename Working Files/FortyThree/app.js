var g = G$('Rahul','Choudhary');
console.log(g);

g.greet().setLanguage('en').greet(true).logMessage();

//g.greet().setLanguage('fs').greet(true);


$('#login').click(function(){
    
    var loginGreeting = G$('Rahul','Choudhary');
    
    $('#logindiv').hide();
    
    loginGreeting.setLanguage($('#lang').val()).HTMLGreeting('#greeting',true).logMessage();
    
})