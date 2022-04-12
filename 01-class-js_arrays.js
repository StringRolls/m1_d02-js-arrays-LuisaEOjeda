// Class code examples

// always declare the array with 'const'. Ither wise the computer will let us change the label of the array


const myNewArray = [];

myNewArray[0] = 'hola';

myNewArray.push('¿cómo estás?');

// arrays are mutable



console.log(myNewArray.push('¿cómo estás?'))

console.log(delete myNewArray[1])

// when declaring an array as const it doesn't affect the elements within
// but it cannot be declared again

console.log(myNewArray); // [ 'hola', '¿cómo estás?' ]

/*
myNewArray = ['This is a redeclaration of the array that will return an error']

console.log(myNewArray); // ERROR: Assignment to constant variable.
*/

let changeableLable = ["this array has an unprotected label"]

changeableLable = ["ooops, I lost the original array"]

console.log(changeableLable); // the original array is orphaned or abbandoned.
// orphaned arrays are inmediately diestroyed by the computer

// An aray is an ORDERED list of thing
const drinks = [
    "Agua",
    "Coca-cola",
    "Aquarius",
    "Fanta",
    "Cacaolat",
    "Jagger",
    "Red Bull",
    "Cervemocho",
  ];

  console.log(`First drink is ${drinks[0]}`)
  console.log(`Second drink is ${drinks[1]}`)

  // Change order in array 

  const firstEl = drinks[0]
  const fifthEl = drinks[5]

  drinks[5] = firstEl;
  drinks[0] = fifthEl;

console.log("First drink is ", drinks[0]);
console.log("Second drink is ", drinks[1]);

console.log(drinks)

//length. It's the number o elements within an array
console.log(`We have ${drinks.length} drinks in total`)

const bagOfThings = ["I am atring", 
764124, 
null, 
undefined, 
true, 
["I am a sub aray"], 
{type: "object inside aray"}]

console.log(`The drinks array contains ${bagOfThings.length} elements`)

// .push() and .pop()
// Adding values (last) ---- declarative
console.log ("retrun value from .push(): ", drinks.push('Nestea', 'Monster'))
console.log('...extended even more:', drinks)

console.log("Now the drinks are: " , drinks.pop())

// Modifying elements order or vaues
// .splice() helps changed the order and/or the values 
// The splice() method changes the contents of an array by removing or replacing existing 
// elements and/or adding new elements in place.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// from index one and starting in 0 add feb

console.log('now the complete moths are: ' , months)

months.splice(4, 0, 'May').push('July', 'August', 'September', 'October', 'November', 'December')

console.log(months)

//and .split()
// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

const string = 'Lorem ipsum dolor sit amet'
const words = string.split(' ')
console.log('Here is each word in the string:', words)
