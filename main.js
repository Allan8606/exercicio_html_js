const form = document.getElementById("form-numeros");
const numeroA = document.getElementById("numeroA");
const numeroB = document.getElementById("numeroB");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (numeroB.value > numeroA.value) {
    document.querySelector(".menssagemValida").style.display = "block";
  } else {
    document.querySelector(".menssagemNaoValida").style.display = "block";
  }
});
