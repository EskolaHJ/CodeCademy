// JS arrays can be declared like this

let scores = [100, 72, 83, 94, 88, 87];
let names = ['Nancy','Blessing','Jorge','Svetlana'];

// Arrays are zero-based indexed, meaning the first element is at index 0. So if you have five
// and you want the fifth you would inex 4

// Arrays can be accessed by an index reference

let aScore = scores[0]; // The aScore variable is assgned the value of 100

// Arrays values can be modified

scores[0] = 99; // This assignment expression changed the first score in the array from 100 to 99.

// Arrays can be iterated over using a classic for loop:

/* for (let i = 0; i < scores.length; i++) {
     console.log(scores[i])
} This is a loop*/

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

// Arrays can be iterated over using other looping structures like forEeach

scores.forEach(function(score) {
    console.log(score);
})

// Arrays have a length property

let numScores = scores.length; // The numScores variable is assigned the value of 6

// Arrat Methods

// Arrays have a number of methods that can be used to manipulate (change) them

scores.push(100); // Adds a new element to the end of the array
// .push adds an element to the end of the array

scores.pop(); // Removes the last element from the array
// .pop is the method to remove the last element from an array

scores.shift(); // Removes the first element from the array
// .shift is the method to remove the first element in the array

scores.unshift(100); // Adds a new element to the beginning of the array
// .unshift is how you add a new element to the start of an array

scores.splice(2, 1); // Removes 1 element from the array starting at index 2
// .splice(2, 1) the 2 is where to start at in index the 1 is how many elements to remove

// names.length; counts what is saved in the array

// bacltick ` for $ set ups in js

//change this concatenated string into a template literal

 // let output = "Welcome to" + coursesSubject + " " + courseNumber + "!Credits: " + courseCredits + "Length:" + courseLength;

let output = `Welcome to ${courseSubject} ${courseNumber} !Credits: ${courseCredits} Length: ${courseLength}`;

// Given the following script, finish the code snippet to produce a list of three temples based on the temples array

let temples = ["Rome", "Salt Lake", "Nauvoo"];
let listItems = "";
for (const temple of temples) {
    listItems += `<li>______</li>`;
}
document.querySelector("ul").innerHtml = listItems;

// Answer

listItems += `<li>${temple}</li>`;


// DOM = Document Object Model

// There's a "root" object called window.

// we can use it as a global object:

function sayHi() {
    alert("Hello");
}

// global functions are methods of the global object
window.sayHi();
// And we can use it as a browser window, to show the window height:
alert(window.innerHeight); // inner window height

// The document object is the main "entry point" to the page. We can change or create anything on the page using it

// For instance:

// change the background color to red

document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000); // 1000 is a second

// BOM (Browser Object Model)

// navigator object provides background information about the browser and the OS. 
// navigator.userAgent -about the current browser
//navigator.platform -about the platform so OS (Windows/Linux/Mac)
// Location object allows us to read the current URL and can redirect the browser to a new one

// Here's how we can use the location object:
alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
    location.href = "https//wikipedia.org"; // redirect the browser to another URL
}

// DOM tree
// every HTML tag is an object
// Nested tags are "children" of the enclosing one, the text inside a tag is an object as well.
// for example doccument.body is the object representing the <body> tag
// Running this code will make the <body> red for 3 seconds
document.body.style.background = 'red';

setTimeout(() => document.body.style.background = "", 3000); // return back

// innerHTML - HTML contents of the node.
// offsetWidth - the node width (in pixels)

// <html> is at the root, then <head> and <body> are its children