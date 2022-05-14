let paragraph = document.querySelector("#data-para1");

paragraph.addEventListener("click", changeText);

function changeText() {
  paragraph.innerHTML = "Text Changed.";
  paragraph.style.background = "green";
}
