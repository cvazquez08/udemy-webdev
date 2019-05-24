// The style property is one way to manipulate an element's style

// SELECT
// let tag = document.getElementById("highlight")

//MANIPULATE
// tag.style.color = "blue";
// tag.style.border = "10 px solid red";
// tag.style.fontSize = "70px";
// tag.style.background = "yellow";
// tag.style.marginTop = "200px";
//  **** NOTE RIGHT SIDE MUST BE A STRING ****
// this is not considered DRY coding
// rather than manually adding individual properties to an element, you would 
// create a the style in a css file, and "turn it off and on"

// ************************************************

// DEFINED IN CSS
// .some-class {
  //  color: blue;
  //  border: 10px solid red;
// }

// Manipulate in JS
// let tag = document.getElementById('highlight');
// ADD CLASS TO THE SELECTED ELEMENT
// tag.classList.add('some-class');
// REMOVE A CLASS
// tag.classList.remove('some-class');
// TOGGLE CLASS
// tag.classList.toggle('some-class');