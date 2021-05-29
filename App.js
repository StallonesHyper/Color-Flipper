var button = document.querySelector("button");

var colorArray = ["Red", "Blue", "Green", "Yellow"];

button.addEventListener("click", function changeColor() {
  var random = randomNumber();
  document.body.style.backgroundColor = colorArray[random];
});

function randomNumber() {
  return Math.floor(Math.random() * colorArray.length);
}
