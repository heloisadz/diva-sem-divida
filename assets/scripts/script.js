// parte pra ter um scroll suave ate a seção de recursos quando clica no botao
const botaoRecursos = document.getElementById("btn-recursos");
const secaoRecursos = document.getElementById("informacoes");

botaoRecursos.addEventListener("click", function (){
  secaoRecursos.scrollIntoView({ behavior: "smooth" });
});

// contador dos números
const contadores = document.querySelectorAll(".numeros-valor");

function animarContador(elemento){
  const valorFinal = Number(elemento.dataset.valor);
  const prefixo = elemento.dataset.prefixo || "";
  const sufixo = elemento.dataset.sufixo || "";
  let valorAtual = 0;

  const intervalo = setInterval(function (){
    valorAtual++;
    elemento.textContent = prefixo + valorAtual + sufixo;

    if (valorAtual >= valorFinal){
      clearInterval(intervalo);
    }
  }, 100);
}

// pra começar a contagem quando a secao aparecer na tela
const secaoNumeros = document.querySelector(".numeros");
let jaAnimou = false;

window.addEventListener("scroll", function (){
  const posicao = secaoNumeros.getBoundingClientRect().top;

  if (posicao < window.innerHeight && !jaAnimou){
    jaAnimou = true;
    contadores.forEach(animarContador);
  }
});