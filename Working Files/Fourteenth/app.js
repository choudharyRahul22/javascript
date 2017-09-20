var rahul = {
    firstName: 'Rahul',
    lastName: 'Choudhary',
    address: {
        street: 'VVIP Addresses',
        city: 'Ghaziabad',
        state: 'U.P'
    }
}

function data(person){
    console.log('Hi ' + person.firstName);
}

data(rahul);

data({
    firstName: 'Shalu',
    lastName: 'Choudhary'
})