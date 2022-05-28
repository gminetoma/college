let buttons = document.querySelectorAll(".data-button")
let buttonsLength = buttons.length;

for (let counter = 0; counter < buttonsLength; counter++) {
  buttons[counter].addEventListener("click", changeText);
}

function changeText(event) {
  let button = event.currentTarget;
  button.innerHTML = "Broken";
  button.className = "data-button--red";
}
