// textContent
// Returns a string of all the text contained in a given element
// <p> This is an <strong> awesome </strong> paragraph </p>
// Select the <p> tag:
// let tag = document.querySelector('p');
// Retrieve the textContent
// tag.textContent // "This is an awesome paragraph"
// Alter the textContent
// tag.textContent = "blah blah blah"

// innerHTML
// Returns all HTML elements inside the tag
// <p> Tgus us an <strong>awesome</strong> paragraph </p>
// Select
// let tag = document.querySelector('p');
// Manipulate
// tag.innerHTML // "This is an <strong>awesome</strong> paragraph"


// Can chain istead of setting to variable
// document.querySelector('h1).textContent = "END OF LESSON"


// BONUS
// REPLACE EVERYTHING ON PAGE WITH H1 TAG THAT SAYS GOODBYE
// document.body.innerHTML = "<h1> GOODBYE </h1>"
