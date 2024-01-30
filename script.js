const chapter = document.getElementById("capitulo");
const btPrev = document.getElementById("anterior");
const btPlayPouse = document.getElementById("play-pause");
const btNext = document.getElementById("proximo");
const audioCapitulo = document.getElementById("audio-capitulo");
const numberChapter = 10;
// funcção para ativar o botão de dar play
function audioActive() {
  // metedo de play para os audios
  audioCapitulo.play();
  // adiconar e remove a img de pouse e play
  btPlayPouse.classList.remove("bi-play-circle-fill");
  btPlayPouse.classList.add("bi-pause-circle-fill");
}
// funcão do botão para pausar o play
function audioRemove() {
  // metedo de pause para os audios
  audioCapitulo.pause();
  // adiconar e remove a img de pouse e play
  btPlayPouse.classList.remove("bi-pause-circle-fill");
  btPlayPouse.classList.add("bi-play-circle-fill");
}

function trocaNomeFaixa() {
  capitulo.innerText = "Capítulo " + capituloAtual;
}
let taTocando = 0;
// função para conferir se esta tocando

// let para quando estive tocando esta zerado, somente quando estive com  1 ela para de tocar
// let para o capitulo comeca com 1
function audio() {
  if (taTocando === 0) {
    audioActive();
    taTocando = 1;
  } else {
    audioRemove();
    taTocando = 0;
  }
}
let capituloAtual = 1;
//  o capítulo atual começa com 1

// função para muda de faixa dos capítulos
function nextchapter() {
  // se o numero de index do capito for igual capitulo autal ele retornara para o proxímo
  if (capituloAtual === numberChapter) {
    capituloAtual = 1;
    //  o else fara que mudaram para o proxímo capitulo
  } else {
    capituloAtual += 1;
  }
  //  pegando o get do src e como o html o audio ja vai esta com 1, pegando o valor do capítulo atual mudaram a audío
  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  // ativando o audío para quando terminar, dar continuidade para o proxímo
  audioActive();
  taTocando = 1;
  // um função para mudar o o texto da capítulo
  trocaNomeFaixa();
}

function privChapter() {
  if (capituloAtual === 1) {
    capituloAtual = numberChapter;
  } else {
    capituloAtual -= 1;
  }
  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  audioActive();
  taTocando = 1;
  trocaNomeFaixa();
}
btPlayPouse.addEventListener("click", audio);
btNext.addEventListener("click", nextchapter);
btPrev.addEventListener("click", privChapter);
