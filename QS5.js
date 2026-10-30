class Livro {
  constructor(codigo, titulo, autor, anoPublicacao) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.disponivel = true;
  }
}

class Biblioteca {
  constructor() {
    this.acervo = new Map();
  }

  cadastrarLivro(codigo, titulo, autor, anoPublicacao) {
    if (this.acervo.has(codigo)) {
      throw new Error("Erro: Já existe um livro cadastrado com este código.");
    }
    const novoLivro = new Livro(codigo, titulo, autor, anoPublicacao);
    this.acervo.set(codigo, novoLivro);
  }

  consultarLivro(codigo) {
    if (!this.acervo.has(codigo)) {
      throw new Error("Erro: Livro não encontrado no acervo.");
    }
    return this.acervo.get(codigo);
  }

  listarLivros() {
    for (const livro of this.acervo.values()) {
      console.log(`Código: ${livro.codigo} | Título: ${livro.titulo} | Autor: ${livro.autor} | Ano: ${livro.anoPublicacao} | Status: ${livro.disponivel ? "Disponível" : "Emprestado"}`);
    }
  }

  listarDisponiveis() {
    for (const livro of this.acervo.values()) {
      if (livro.disponivel) {
        console.log(`Código: ${livro.codigo} | Título: ${livro.titulo} | Autor: ${livro.autor}`);
      }
    }
  }

  realizarEmprestimo(codigo) {
    const livro = this.consultarLivro(codigo);
    if (!livro.disponivel) {
      throw new Error("Erro: O livro já se encontra emprestado.");
    }
    livro.disponivel = false;
  }

  realizarDevolucao(codigo) {
    const livro = this.consultarLivro(codigo);
    if (livro.disponivel) {
      throw new Error("Erro: O livro já está disponível no acervo.");
    }
    livro.disponivel = true;
  }

  removerLivro(codigo) {
    if (!this.acervo.has(codigo)) {
      throw new Error("Erro: Impossível remover. Livro não existente.");
    }
    this.acervo.delete(codigo);
  }
}

const minhaBiblioteca = new Biblioteca();

try {
  minhaBiblioteca.cadastrarLivro(101, "Dom Casmurro", "Machado de Assis", 1899);
  minhaBiblioteca.cadastrarLivro(102, "O Cortiço", "Aluísio Azevedo", 1890);

  minhaBiblioteca.listarLivros();

  minhaBiblioteca.realizarEmprestimo(101);
  minhaBiblioteca.listarDisponiveis();

  minhaBiblioteca.realizarDevolucao(101);
  minhaBiblioteca.removerLivro(102);
} catch (erro) {
  console.error(erro.message);
}