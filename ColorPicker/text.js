let button = document.querySelector("button");


button.addEventListener("click", () => {

  let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16); // randomize hexcolor (found on stackoverflow)

  document.body.style.background = `${color}`
});
