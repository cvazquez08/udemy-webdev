let body = document.querySelector("body"); // SELECT
let isBlue = false;

setInterval(function() { // MANIPULATE with setInterval every second
  if(isBlue){
    body.style.background = 'white';
  } else {
    body.style.background = '#3498db'
  }
  isBlue = !isBlue;
}, 1000)


