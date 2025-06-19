/* Mesmas arrays de produtos do script.js original, sem a parte de promoções */
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
  { nome: "Costela Gaucha", preco: 35.50 },
  { nome: "Costela Ripa", preco: 23.50 },
  { nome: "Ponta de Agulha", preco: 24.90 },
  { nome: "Costela Minga", preco: 29.90 }
];

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

/**
 * Preenche uma tabela a partir do id e de um array de produtos.
 * @param {string} id – ID do elemento <table>
 * @param {Array} produtos – Lista de objetos { nome, preco }
 */
function preencherTabela(id, produtos) {
  const tabela = document.getElementById(id);
  tabela.innerHTML = "";
  produtos.forEach(item => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.preco.toFixed(2).replace(".", ",")}</td>
    `;
    tabela.appendChild(linha);
  });
}

// Quando o DOM estiver carregado, preenche todas as tabelas
document.addEventListener("DOMContentLoaded", function() {
  preencherTabela("tabela-bovinos", bovinos);
  preencherTabela("tabela-bovinos2", bovinos2);
  preencherTabela("tabela-suinos", suinos);
  preencherTabela("tabela-aves", aves);
});
