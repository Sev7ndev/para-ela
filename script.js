// main.js
import { iniciarTypewriter } from './typewriter.js';
import { typewriterLento } from './typewriter.js';

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const postIntro = document.getElementById("postIntro");
  const conteudo = document.getElementById("conteudoPrincipal");

  const btnSim = document.getElementById("btnSim");
  const btnComecar = document.getElementById("btnComecar");
  
  const btnNao = document.getElementById("btnNao");
  const alternativa = document.getElementById("alternativa");
  const btnVoltar = document.getElementById("btnVoltar");

  btnNao.addEventListener("click", () => {
    intro.classList.add("hidden");
    alternativa.classList.remove("hidden");
  });

  btnVoltar.addEventListener("click", () => {
    alternativa.classList.add("hidden");
    intro.classList.remove("hidden");
  });

  typewriterLento("intro-1", [
    "Oi, tenho algo pra te mostrar...",
    "Você quer ver? '-'"
  ]);

  btnSim.addEventListener("click", () => {
    intro.classList.add("hidden");
    postIntro.classList.remove("hidden");
  });

  btnComecar.addEventListener("click", () => {
    postIntro.classList.add("hidden");
    conteudo.classList.remove("hidden");

    // Voltar para o topo da página ao iniciar o conteúdo
    window.scrollTo(0, 0);

    iniciarTypewriter("funny-1", [
      "As nossas brincadeiras... bobas como sempre (principalmente as que eu faço), mas sempre são bem divertidas kkk",
      "Achei algumas coisas interessantes... olha só:"
    ]);
  });
});
