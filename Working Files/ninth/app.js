function waitForThreeSeconds() {
    var ms = 3000+ new Date().getTime();
    
    while(new Date() < ms) {
    }
    
    console.log('Finished Function waitForThreeSeconds');
}

function clickHandler() {
    console.log('Click handler');
}

document.addEventListener('click',clickHandler);

waitForThreeSeconds();

console.log('Finished Execution of program');

