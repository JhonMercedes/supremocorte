const bovinos = [
  { nome: "Picanha", preco: 89.90 },
  { nome: "Filé Mignon", preco: 65.90 },
  { nome: "Alcatra", preco: 52.00 },
  { nome: "Lombo", preco: 49.00 },
  { nome: "Maminha", preco: 52.00 },
  { nome: "Contra File", preco: 59.90 },
  { nome: "Fraldinha", preco: 48.50 },
  { nome: "Cupim", preco: 55.90 },
  { nome: "Patinho Dianteiro", preco: 41.90 },
  { nome: "Patinho Trazeiro", preco: 37.90 },
  { nome: "Capa de Costela", preco: 37.90 },
  { nome: "Acem", preco: 37.90 },
  { nome: "Peito", preco: 39.90 }
];

const bovinos2 = [
  { nome: "Paloma", preco: 39.00 },
  { nome: "Lagarto", preco: 39.00 },
  { nome: "Paleta", preco: 32.50 },
  { nome: "Peixinho", preco: 36.50 },
  { nome: "Musculo", preco: 26.50 },
  { nome: "Pescoço", preco: 26.00 },
  { nome: "Ossobuco", preco: 22.90 },
  { nome: "Rabada", preco: 35.90 },
  { nome: "Costela Gaucha", preco: 33.50 },
  { nome: "Costela Ripa", preco: 23.50 },
  { nome: "Ponta de Agulha", preco: 24.90 },
  { nome: "Costela Minga", preco: 29.90 }
]

const aves = [
  { nome: "Tulipa", preco: 33.00 },
  { nome: "Coxa", preco: 15.90 },
  { nome: "Peito c/osso", preco: 24.70 },
  { nome: "File de Peito", preco: 27.00 },
  { nome: "FR Passarinho", preco: 20.00 },
  { nome: "Sobrecoxa", preco: 17.90 },
  { nome: "Coxinha", preco: 26.90 },
  // { nome: "Moela", preco: 8.75 },
  { nome: "Coração", preco: 37.00 },
  { nome: "Ling C/Queijo", preco: 25.50 },
  { nome: "Ling C/Bacon", preco: 25.50 },
  { nome: "Ling FR Ervas", preco: 26.50 }
];

const suinos = [
  { nome: "Pernil S/Osso", preco: 23.50 },
  { nome: "Pernil C/Osso", preco: 22.50 },
  { nome: "Lombo", preco: 30.00 },
  { nome: "Capa Lombo", preco: 31.00 },
  { nome: "Costelinha", preco: 32.00 },
  { nome: "Suã", preco: 17.90 },
  { nome: "Bisteca", preco: 22.00 },
  { nome: "Panceta", preco: 26.50},
  { nome: "Toucinho", preco: 15.00 },
  { nome: "Papada", preco: 15.90 },
  { nome: "Linguiça", preco: 33.00 }
];

// Produtos em promoção (com imagens)
const promocoes = [
  { nome: "TULIPA", preco: 25.90, imagem: "./imagens/tulipa-frango.png" },
  { nome: "RABADA", preco: 32.90, imagem: "./imagens/rabada-bovina.png" }
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
setInterval(atualizarOferta, 10000); // troca tabela oferta a cada 10s


function atualizarRelogio() {
  const agora = new Date();
  const data = agora.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  const hora = agora.toLocaleTimeString('pt-BR');

  document.getElementById("data").textContent = data;
  document.getElementById("hora").textContent = hora;
}

// Atualiza o relógio a cada segundo
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

    setTimeout(alternarSlides, 45000); // Tabela por 45s
  }
}

// Inicia a troca automática
setTimeout(alternarSlides, 45000); // Começa com tabela por 45s


