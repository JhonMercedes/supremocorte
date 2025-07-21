const bovinos = [
  { nome: "Picanha", preco: 89.90 },
  { nome: "Filé Mignon", preco: 62.90 },
  { nome: "Alcatra", preco: 52.00 },
  { nome: "Lombo", preco: 49.00 },
  { nome: "Maminha", preco: 52.00 },
  { nome: "Contra File", preco: 59.90 },
  { nome: "Fraldinha", preco: 48.50 },
  { nome: "Cupim", preco: 55.90 },
  { nome: "Patinho Dian.", preco: 41.90 },
  { nome: "Patinho Traz.", preco: 38.90 },
  { nome: "Capa de Costela", preco: 37.90 },
  { nome: "Acem", preco: 36.90 },
  { nome: "Peito", preco: 39.90 }
];

const bovinos2 = [
  { nome: "Paloma", preco: 38.90 },
  { nome: "Lagarto", preco: 38.90 },
  { nome: "Paleta", preco: 32.50 },
  { nome: "Peixinho", preco: 34.90 },
  { nome: "Musculo", preco: 26.50 },
  { nome: "Pescoço", preco: 25.90 },
  { nome: "Ossobuco", preco: 23.90 },
  { nome: "Rabada", preco: 32.90 },
  { nome: "Gaucha", preco: 35.50 },
  { nome: "Costela Ripa", preco: 23.50 },
  { nome: "Ponta de Agulha", preco: 24.90 },
  { nome: "Costela Minga", preco: 29.90 },
  { nome: "Coxão Mole", preco: 41.90 }
];

const aves = [
  { nome: "Tulipa", preco: 33.00 },
  { nome: "Coxa", preco: 15.90 },
  { nome: "Peito c/osso", preco: 24.70 },
  { nome: "File de Peito", preco: 27.00 },
  { nome: "FR Passarinho", preco: 22.00 },
  { nome: "Sobrecoxa", preco: 17.90 },
  { nome: "Coxinha", preco: 26.90 },
  { nome: "Coração", preco: 37.00 },
  { nome: "Ling C/Queijo", preco: 25.50 },
  { nome: "Ling C/Bacon", preco: 25.50 },
  { nome: "Ling FR Ervas", preco: 26.50 },
  { nome: "Coxa C/Sobrecoxa", preco: 14.90 },
  { nome: "Frango Inteiro", preco: 11.99 }
];

const suinos = [
  { nome: "Pernil S/Osso", preco: 23.50 },
  { nome: "Pernil C/Osso", preco: 22.50 },
  { nome: "Lombo", preco: 30.00 },
  { nome: "Capa Lombo", preco: 31.00 },
  { nome: "Costelinha", preco: 33.00 },
  { nome: "Suã", preco: 17.90 },
  { nome: "Bisteca", preco: 22.00 },
  { nome: "Panceta", preco: 26.90},
  { nome: "Toucinho", preco: 15.00 },
  { nome: "Papada", preco: 16.00 },
  { nome: "Ling C/Pimenta", preco: 33.90 },
  { nome: "Ling S/Pimenta", preco: 33.00 }
];

// Produtos em promoção (com imagens)
const promocoes = [
  { nome: "COSTELA RIPA", preco: 22.50, imagem: "./imagens/costela-ripa.jpeg" },
  { nome: "LINGUIÇA MISTA", preco: 19.90, imagem: "./imagens/toscana-bovina.jpeg"},
  { nome: "PICANHA DA CASA", preco: 79.90, imagem: "./imagens/picanha.jpeg" },
  { nome: "FRANGO INTEIRO", preco: 9.90, imagem: "./imagens/frango-inteiro.jpeg" },
  { nome: "CUPIM MATURADO", preco: 59.90, imagem: "./imagens/cupim-maturado.jpeg" }
];

let index = 0;

function atualizarOferta() {
  const oferta = promocoes[index];
  document.getElementById("oferta-img").src = oferta.imagem;
  document.querySelector(".oferta-desc h3").textContent = oferta.nome;
  document.querySelector(".oferta-desc .preco").innerHTML = `${oferta.preco.toFixed(2).replace(".", ",")} <span>kg</span>`;

  index = (index + 1) % promocoes.length;
}

function preencherTabela(id, produtos) {
  const tabela = document.getElementById(id);
  tabela.innerHTML = "";
  produtos.forEach(item => {
    const linha = document.createElement("tr");
    linha.innerHTML = `<td>${item.nome}</td><td>${item.preco.toFixed(2).replace(".", ",")}</td>`;
    tabela.appendChild(linha);
  });
}

// Inicializa
preencherTabela("tabela-bovinos", bovinos);
preencherTabela("tabela-bovinos2", bovinos2);
preencherTabela("tabela-suinos", suinos);
preencherTabela("tabela-aves", aves);
atualizarOferta();
setInterval(atualizarOferta, 3000); // troca tabela oferta a cada 10s


function atualizarRelogio() {
  const agora = new Date();
  const data = agora.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  const hora = agora.toLocaleTimeString('pt-BR');

  document.getElementById("data").textContent = data;
  document.getElementById("hora").textContent = hora;
}

// Atualiza o relogio a cada segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

let mostrandoProdutos = true;

function alternarSlides() {
  if (mostrandoProdutos) {
    // Mostrar logo
    document.querySelector(".totem").style.display = "none";
    document.querySelector(".logo-slide").style.display = "flex";
    mostrandoProdutos = false;

    setTimeout(alternarSlides, 10000); // Logo por 10s
  } else {
    // Mostrar tabela
    document.querySelector(".totem").style.display = "flex";
    document.querySelector(".logo-slide").style.display = "none";
    mostrandoProdutos = true;

    setTimeout(alternarSlides, 55000); // Tabela por 45s
  }
}

// Inicia a troca automatica
setTimeout(alternarSlides, 45000); // começa com tabela por 45s

// Adicionando botao para tela cheia
function alternarTelaCheia() {
  if (!document.fullscreenElement) {
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

// Atualiza o texto do botao de tela cheia
document.addEventListener("fullscreenchange", () => {
  const entrar = document.getElementById("icone-entrar");
  const sair = document.getElementById("icone-sair");

  if (document.fullscreenElement) {
    entrar.style.display = "none";
    sair.style.display = "inline";
  } else {
    entrar.style.display = "inline";
    sair.style.display = "none";
  }
});


let temporizadorEscondeBotao;

// Mostrar botao de tela cheia
function mostrarBotaoFullscreen() {
  const btn = document.getElementById("btn-fullscreen");
  btn.classList.remove("oculto");

  clearTimeout(temporizadorEscondeBotao);
  temporizadorEscondeBotao = setTimeout(() => {
    btn.classList.add("oculto");
  }, 5000); // 5 segundos
}

document.addEventListener("mousemove", mostrarBotaoFullscreen);
document.addEventListener("touchstart", mostrarBotaoFullscreen);

// Ocultar inicialmente apos 5s do carregamento
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("btn-fullscreen").classList.add("oculto");
  }, 5000);
});

let temporizadorEscondeCursor;

function resetarCursor() {
  document.body.classList.remove("ocultar-cursor");
  clearTimeout(temporizadorEscondeCursor);

  temporizadorEscondeCursor = setTimeout(() => {
    document.body.classList.add("ocultar-cursor");
  }, 3000); // 3 segundos de inatividade
}

document.addEventListener("mousemove", resetarCursor);
document.addEventListener("touchstart", resetarCursor); // para garantir em telas sensÃ­veis ao toque

// Inicia o temporizador no carregamento da pagina
window.addEventListener("load", () => {
  resetarCursor();
});
