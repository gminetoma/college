let botao = document.querySelector("#botao");
let estaQuebrado = false;
let contaCliques = 0;

botao.style.background = "blue";

botao.addEventListener("mouseover", (e) => {
  if (!estaQuebrado) {
    botao.style.background = "green";
  }
});

botao.addEventListener("mouseout", (e) => {
  if (estaQuebrado === false) {
    botao.style.background = "blue";
  }
});

botao.addEventListener("click", (e) => {
  contaCliques++;

  if (contaCliques >= 10) {
    botao.style.background = "red";
    botao.innerHTML = "Quebrei";
    estaQuebrado = true;
  }
});
