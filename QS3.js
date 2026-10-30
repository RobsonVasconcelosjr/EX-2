const produtos = [
  { codigo: 1, nome: "Teclado", preco: 100, quantidade: 5 },
  { codigo: 2, nome: "Mouse", preco: 50, quantidade: 20 },
  { codigo: 3, nome: "Monitor", preco: 800, quantidade: 8 },
  { codigo: 4, nome: "Fone", preco: 150, quantidade: 15 },
  { codigo: 5, nome: "Webcam", preco: 250, quantidade: 3 }
];

const menosDeDez = produtos.filter(p => p.quantidade < 10);
console.log(menosDeDez);

const nomesProdutos = produtos.map(p => p.nome);
console.log(nomesProdutos);

const produtoPorCodigo = produtos.find(p => p.codigo === 3);
console.log(produtoPorCodigo);

const preciosComDesconto = produtos.map(p => p.preco * 0.9);
console.log(preciosComDesconto);

const valorTotalPorProduto = produtos.map(p => ({
  nome: p.nome,
  valorTotal: p.preco * p.quantidade
}));
console.log(valorTotalPorProduto);

const valorTotalEstoque = produtos.reduce((acc, p) => acc + (p.preco * p.quantidade), 0);
console.log(valorTotalEstoque);

const temEstoqueZero = produtos.some(p => p.quantidade === 0);
console.log(temEstoqueZero);

const todosPrecoMaiorQueZero = produtos.every(p => p.preco > 0);
console.log(todosPrecoMaiorQueZero);