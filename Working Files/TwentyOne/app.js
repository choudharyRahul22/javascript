var numbers = [1,2,3,4];
console.log(numbers);

console.log(numbers[0]);

var arr = [
        1,
        true,
        {
            name: 'rahul'
        },
        function(name){
            console.log(name);
        },
        'String'
        
];

console.log(arr);

arr[3](arr[2].name);

