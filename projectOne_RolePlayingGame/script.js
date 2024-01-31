//JavaScript it is best practice to use the let keyword instead. This fixes several unusual behaviors with var that can make your code difficult to debug.
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
//JavaScript has multiple different data types(number, string ...etc). Strings are used to store things like words or text. Strings are surrounded with double quotes, single quotes, or backticks.
let inventory = ["stick"];
//An array can be used to hold multiple values

//JavaScript interacts with the HTML using the Document Object Model, or DOM. The DOM is a tree of objects that represents the HTML. You can access the HTML using the document object, which represents your entire HTML document.

// let button1 = document.querySelector("#button1");
//One method for finding specific elements in your HTML is using the querySelector() method. The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector.

// If you are not going to assign a new value to a variable, it is best practice to use the const keyword to declare it instead of the let keyword. This will tell JavaScript to throw an error if you accidentally reassign it.

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");

// Functions are special tools that allow you to run sections of code at specific times.

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goTown() {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
  }
  
  function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
  }

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
}
/* You previously used an array to store strings. But arrays can store any data type. This time, your array will be storing objects. Objects are similar to arrays, but with a few differences. One difference is that objects use properties, or keys, to access and modify data.

 Objects are indicated by curly braces. An empty object would look like {}.

Just like array values, object properties are separated by a comma. Add a comma after your name property and add a button text property with the value of an empty array.

Note that, because the property name has more than one word, you'll need to surround it in quotes. For example:

{
  name: "Naomi",
  "favorite color": "purple"
}*/

/*
Pass in only the first element of the object array by adding [0] at the end of the variable. For example: myFunction(arg[0]);.

This is called bracket notation. Values in an array are accessed by index. Indices are numerical values and start at 0 - this is called zero-based indexing. arg[0] would be the first element in the arg array.
*/ 

// There is a shorthand way to add or subtract from a variable called compound assignment. For example, changing num = num + 5 to compound assignment would look like num += 5.

// Increasing a value by 1, or incrementing, has a special operator in JavaScript: ++. If you wanted to increase num by 1, you could write num++. increment operator

/*When you use a variable in bracket notation, you are accessing the property or index by the value of that variable.

For example, this code uses the index variable to access a value of array.

let value = array[index]; */

//add new value to array array.push(newValue)

// step 104 - Notice that you already have a currentWeapon variable elsewhere in your code. Since you are using the let keyword instead of var, the new currentWeapon is scoped only to this if statement. At the close of the if statement, the old currentWeapon will be used again.

//The shift() method on an array removes the first element in the array and returns it. Use this method to take the first element from the inventory array and assign it to your currentWeapon variable.

//Concatenation operators join multiple strings into a single string. There are two concatenation operators, + and & . Both carry out the basic concatenation operation

// The Math object in JavaScript contains static properties and methods for mathematical constants and functions. One of those is Math.random(), which generates a random number from 0 (inclusive) to 1 (exclusive). Another is Math.floor(), which rounds a given number down to the nearest integer.
// Using these, you can generate a random number within a range. For example, this generates a random number between 1 and 5: Math.floor(Math.random() * 5) + 1;.

/* 
JavaScript has a conditional operator called the ternary operator. This can be used as a one-line if-else statement. The syntax is: condition ? true : false.

Here is an example of an if-else statement changed to a ternary:

if (num > 5) {
  bigger()
} else {
  smaller()
}

num > 5 ? bigger() : smaller();
Change your new if-else statement to a ternary.
*/