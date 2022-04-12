const log = console.log;

//Using `push` and `unshift`, make this array contain the numbers from zero through seven:

const arr = [2, 3, 4];

arr.push(5, 6, 7);
arr.unshift(1);

log(arr); // => [0, 1, 2, 3, 4, 5, 6, 7]

// What is _returned_ by `push`? Before throwing this into 
//the console, form a hypothesis about what you think the return value will be:

log(arr.push()) // 7

const myArr = [5, 7, 9];
myArr.push(6); // [5, 7, 9, 6]

// Change all numbers to be those numbers multiplied by two:

const numbers = [4, 9, 7, 2, 1, 8];

const multiplied = numbers.map(x => x * 2);

log(multiplied);

// Change all **odd** numbers to be those numbers multiplied by two:

const otherNumbers = [4, 9, 7, 2, 1, 8];
let odds = [];

for(let i= 0; i < otherNumbers.length; i++) {
    if (otherNumbers[i] % 2 !== 0){
        odds.push(otherNumbers[i]);
    }
}

log('These are: ', odds)


//Starting with an empty array called `rainbowColors`:

const rainbowColors = [];

//Add "orange" to the end of the array

rainbowColors.push('orange');

log(rainbowColors)

//Add "red" to the start of the array

rainbowColors.unshift('red');

log(rainbowColors)

//Add "yellow" to the end
   
rainbowColors.push('yellow')

log(rainbowColors)

// Add "green", "blue", "indigo", and "violet" to the end of the array

rainbowColors.push("green", "blue", "indigo", "violet");

log(rainbowColors)

//Print the length of the array

 log(rainbowColors.length)

// Print the second item

log(rainbowColors[2])

//Print the last item (make this flexible/dynamic!)

let lastElement = rainbowColors[rainbowColors.length - 1]
log(lastElement)

log(rainbowColors)

//Print the index of the string "blue"

log(rainbowColors.indexOf('blue'))







