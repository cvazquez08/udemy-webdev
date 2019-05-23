// EVENTS
// We selec an element and then add an event listener

// LISTEN FOR A CLICK ON A BUTTON
// LISTEN FOR A HOVER EVENT ON THE h1
// LISTEN FOR A KEYPRESS EVENT ON TEXT INPUT

// addEventListener
// element.addEventListener(type, functionToCall);

// let button = document.querySelector("button");
// button.addEventListener("click", function() {
//   console.log("SOMEONE CLICKED THE BUTTON!")
// })


let button = document.querySelector('button');
let paragraph = document.querySelector('p');

//SETUP CLICK LISTENER
button.addEventListener("click", function() {
  alert("WHY WOULD YOU CLICK THE BUTTON");
  paragraph.textContent = "YOU CLICKED IT, DIDNT YOU";
});

// could also rewrite above if using the event more than once
// button.addEventListener('click', changeText);

// function changeText(){
//   paragraph.textContent = 'YOU CLICKED IT... DIDNT YOU'
// }


document.querySelector('ul').addEventListener("click", function(){
  console.log("WHY DID YOU CLICK THE UL!");
})

// attach an event listener to each LI
let li = document.querySelectorAll('li');
for(let i = 0; i < li.length; i++){
  li[i].addEventListener("click", function(){
    this.style.color = "pink";
  })
}