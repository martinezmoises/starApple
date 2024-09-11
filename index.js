"user strict";

// let user = "Moises Martinez";
// const PI = 3.14;

// let job = "Programmer";
// const pay = 5000;

// // pay = 2000; not allowed because of CONST that doesn't let you change values

// console.log(user);
// console.log(PI);

// //typeof literally shows you the data type of the variable you created

// console.log( typeof job)
// console.log( typeof pay)

// //Prompting user input

// const userInput = prompt("Your name sir: ");

// //String interpolation
// const greeting = `Hello, ${userInput}! ` ;

//  //Web API . Blocking functions - means it needs to be executed so the rest of the codes runs
// alert(greeting);
// console.log(greeting);

// //Operators
// const num = 5;
// const denom = 2;
// const result = num / denom;

// Math.floor( num / denom ); // Using the math library

// //Comparisons
// let value = 75;
// let answer = "75";

//  console.log(value == answer); //Will give true since the double equal will convert both of them to the same type
//  console.log(value === answer); //Will compare them with the same type

//  //Ternary operator
//  const age = 21;
//  const message = age >= 18 ? "Care for some beer? " : "Here is some milk";
//  console.log(message);

 //function declarations

//  function greetUser(msg, user) {
//     const message = `${msg} , ${user} !`;
//     console.log(message);

//  }

//  greetUser("Hi", "Moises");

 //Function expressions

 //Function without names - anonymous functions

//  const age = function (yearOfBirth) {
//     return 2024 - yearOfBirth;
//  };

//  console.log(age(1979));

//  const userAge = (yearOfBirth) =>  2024 - yearOfBirth;

//  console.log(userAge(1979));

// const checkAge = (yearOfBirth, userName) => {
//    const age = 2024 - yearOfBirth;
//    return `${userName} is ${age} years old`;
// };

// console.log(checkAge(1979, "Dalwin"));

// const guest = function (salutation = "Mr.", firstname, lastname) {
//    return `${salutation} ${firstname} ${lastname}`;
// };

// const guest = (salutation = "Mr", firstname, lastname) => {
//    return `${salutation} ${firstname} ${lastname}`;
// };

// console.log(guest(undefined, "Dalwin", "Lewis"));

// const msg = () => console.log("Dalwin");

// function  greeter(fn) { //fn in this function is called a callback function. Means a function passed to a function
//    fn();
//    fn();
//    fn();
//    fn();

// }

// greeter(msg);

// const msg = () => alert("GREEN APPLE!!!")
// setTimeout( msg, 3000)


/* OBJECT AND METHODS

const user = {
    birthYear: 1979,
    calculateAge: function () {
        return 2024 - this.birthYear;
    }

};

console.log(user.calculateAge()) 
*/

/* LOOPING 
const fruits = ["mango", "pear", "plum"]

for (let el of fruits) {
    console.log(el)
}

*/

/* Arrays callbacl methods

const values = [1,2,3,4]

values.forEach(function (value) {
    console.log(value ** 2);
});

*/

/* Arrays callbacks methods: find()

const words = ["Hello", "Bye"];

const upperWords = words.map(function (word){
    return word.toUpperCase()
});

console.log(upperWords)

*/

// Arrays callbacks methods: find()

// const values = ["Mr. Jones", "Fr. Thomas", "Dr. Jones"];

// const ans = values.find((el) => el.indexOf("Fr.") === 0);

// console.log(ans)

// function total(...values){
//     const result  = values.reduce(function (acc, curr){
//         return acc + curr;
//     });
//     return result;
// }

// console.log(total(3,4,5));

// const inputs = document.querySelectorAll("input")
// // console.log(inputs[0])
// // console.log(inputs[1])
// const firstInput = inputs[0] 
// const secondInput = inputs[1]

// firstInput.value = "Pets"

// const ul = document.querySelector("ul")
// const items = document.querySelectorAll("li")
// const itemsOne = items[0]
// const itemsTwo = items[1]
// const itemsThree = items[2]

// itemsOne.classList.add("ginger")

const newItem = document.createElement("li")
newItem.innerText = "carrots"
newItem.classList = "ginger"