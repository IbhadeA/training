// // variable is use to store data that can be changed
// // old way
// var firstName = 'Ib';
// // new way uses let
// let lastName = 'Aimakno';

// // for varable that would never change use const
// const COLOR_GREEN = 'green'; 
// // always ue descriptive names for your variables

// // primitive value types refer to simple fundamental data examples include string, number, big int, boolean, undefined, null and symbol
// // string
// let favouritFruit = 'strawberries';
// let favouriteIceCream = "chocolate";
// let favouriteAnimal = `Dog`;
// // number
// let numberOfDonuts = 12;
// let pi = 3.14;
// // big int
// let veryLargeNumber = 48476373783393n;
// // boolean
// let lovesCoding = true;
// // undefined
// let favouriteColor;
// console.log(favouriteColor);
// // null
// favouritFruit = null;
// // symbol
// const uniqueKey = Symbol();

// // Reference data types is the object data type
// // object is more complex and they hold key value pairs that enables us to store more than one variable all in one
// let course = {
//     name: 'js for beginners',
//     hours: 3
// };

// // programming languages that allow you to initilize a varable to a data type and then reassign it to a different data type are known as dynamically typed
// let middleName = 'Albina';
// console.log(typeof middleName);
// middleName = 100;
// console.log(typeof middleName);
// middleName = true;
// console.log(typeof middleName);

// objects are reference types, in js are used to represent an object or noun in real life. It contains state and behaviour enabeling us to group together related values and make our code cleaner.
// object  literal syntax uses curly braces {}
// let program = {
//     name: 'js for beginners',
//     hours: 3
// };
// // console.log(program);
// // program.name = 'js fundamentals';
// // console.log(program.name);

// console.log(program['name']);
// // bracket notation
// course['name'] = 'js 101';
// console.log(program['name']);

// ARRAYS are used to store list of data. we could use square brackets to create an array literal
// in arrays we begining counting from 0
// let productColors =['blue', 'green'];

// // console.log(productColors);
// // using index
// console.log(productColors[0]);

// FUNCTIONS are the building block of our applications it allows us to group together statements to perform a task or calculate a value
// Reasons to create a function 1) to perform an action or 2) calculate a value and return that value
function sayHi(name){
    console.log('Hi ' + name);
}

sayHi('Ibina');