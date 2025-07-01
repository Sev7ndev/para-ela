// typewriter.js
export function iniciarTypewriter(idElemento, frases, velocidadeLetra = 35, pausaFrase = 800, delayInicio = 1000) {
  const el = document.getElementById(idElemento);
  if (!el) return;

  let i = 0; // índice da frase atual
  let j = 0; // índice da letra atual
  let atual = "";

  function digitar() {
    if (i < frases.length) {
      if (j < frases[i].length) {
        atual += frases[i][j];
        el.innerHTML = atual;
        j++;
        setTimeout(digitar, velocidadeLetra);
      } else {
        atual += "<br>";
        j = 0;
        i++;
        setTimeout(digitar, pausaFrase);
      }
    }
  }

  setTimeout(digitar, delayInicio);
}

export function typewriterLento(idElemento, frases, velocidadeLetra = 60, pausaFrase = 1000, delayInicio = 1000) {
  const el = document.getElementById(idElemento);
  if (!el) return;

  let i = 0; // índice da frase atual
  let j = 0; // índice da letra atual
  let atual = "";

  function digitar() {
    if (i < frases.length) {
      if (j < frases[i].length) {
        atual += frases[i][j];
        el.innerHTML = atual;
        j++;
        setTimeout(digitar, velocidadeLetra);
      } else {
        atual += "<br>";
        j = 0;
        i++;
        setTimeout(digitar, pausaFrase);
      }
    }
  }

  setTimeout(digitar, delayInicio);
}