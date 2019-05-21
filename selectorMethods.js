// Document comes with a bunch of methods dor selecting elements.
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()


// ***** getElemebyById ********
// id can only occur one time on a page
let tag = document.getElementById("highlight");

// ***** getElementByClassName ****
let tags = document.getElementsByClassName("bolded");
// returns ALL elements with classname "bolded"


//****** getElementsByTagName  *******/
let liTags = document.getElementsByTagName("li")
let h1Tags = document.getElementsByTagName("h1")
// returns ALL elements with tagName "li"

//********* querySelector ***********/
// NOTE => QUERYSELECTOR ONLY RETURNS FIRST ELEMENT EVEN IF MULTIPLE
let queryTagId = document.querySelector("#highlight")
// css syntax to search id
let queryTagClass = document.querySelector(".bolded")
// css syntax to search for class
let queryElement = document.querySelector("h1")
// return only first element with h1 tag


//********* querySelectorAll *************/
let queryAll = document.querySelectorAll('h1')
// will return ALL elements with h1 tag