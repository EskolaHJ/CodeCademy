/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jacob Eskola"
let currentDate = new Date();
const currentYear = currentDate.getFullYear();
const profilePicture = './images/profilePicture.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img[src='./images/placeholder.png']");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textcontent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`)





/* Step 5 - Array */
const favoriteFood = ['Rice', 'Chicken', 'Cream of Chicken'];
const foodString = favoriteFood.join(",");
foodElement.innerHTML = foodString;
const moreFavoriteFood = "Crab";
favoriteFood.push(moreFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;
