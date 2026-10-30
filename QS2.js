class SistemaProdutos {
  constructor() {
    this.produtos = new Map();
  }

  cadastrarProduto(codigo, nome, preco, quantidade) {
    if (this.produtos.has(codigo)) {
      throw new Error("Erro: Código de produto já existente.");
    }
    if (preco <= 0) {
      throw new Error("Erro: Preço deve ser maior que zero.");
    }
    if (quantidade < 0) {
      throw new Error("Erro: Quantidade não pode ser negativa.");
    }
    this.produtos.set(codigo, { codigo, nome, preco, quantidade });
  }

  consultarProduto(codigo) {
    if (!this.produtos.has(codigo)) {
      throw new Error("Erro: Produto inexistente.");
    }
    return this.produtos.get(codigo);
  }

  alterarQuantidade(codigo, novaQuantidade) {
    const produto = this.consultarProduto(codigo);
    if (novaQuantidade < 0) {
      throw new Error("Erro: Quantidade não pode ser negativa.");
    }
    produto.quantidade = novaQuantidade;
    this.produtos.set(codigo, produto);
  }

  alterarPreco(codigo, novoPreco) {
    const produto = this.consultarProduto(codigo);
    if (novoPreco <= 0) {
      throw new Error("Erro: Preço deve ser maior que zero.");
    }
    produto.preco = novoPreco;
    this.produtos.set(codigo, produto);
  }

  removerProduto(codigo) {
    this.consultarProduto(codigo);
    this.produtos.delete(codigo);
  }

  verificarProdutoCadastrado(codigo) {
    return this.produtos.has(codigo);
  }

  exibirTodos() {
    this.produtos.forEach(produto => {
      console.log(`Código: ${produto.codigo} | Nome: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.quantidade}`);
    });
  }
}

const sistema = new SistemaProdutos();

try {
  sistema.cadastrarProduto(1, "Teclado", 100, 5);
  sistema.cadastrarProduto(2, "Mouse", 50, 20);
  sistema.exibirTodos();
  console.log(sistema.consultarProduto(1));
  sistema.alterarQuantidade(1, 10);
  sistema.alterarPreco(2, 60);
  sistema.removerProduto(2);
  console.log(sistema.verificarProdutoCadastrado(2));
} catch (error) {
  console.error(error.message);
}