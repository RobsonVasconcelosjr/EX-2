class Funcionario {
  constructor(nome, salario, cargo) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  exibirDados() {
    console.log(`Nome: ${this.nome} | Cargo: ${this.cargo} | Salário Base: R$ ${this.salario}`);
  }

  calcularBonus() {
    return this.salario * 0.10;
  }

  calcularSalarioFinal() {
    return this.salario + this.calcularBonus();
  }
}

class Professor extends Funcionario {
  constructor(nome, salario) {
    super(nome, salario, "Professor");
  }

  calcularBonus() {
    return this.salario * 0.15;
  }
}

class Programador extends Funcionario {
  constructor(nome, salario) {
    super(nome, salario, "Programador");
  }

  calcularBonus() {
    return this.salario * 0.20;
  }
}

const func1 = new Funcionario("Carlos", 3000, "Assistente");
const func2 = new Funcionario("Ana", 3500, "Analista");
const prof1 = new Professor("Roberto", 5000);
const prog1 = new Programador("Lucas", 6000);

const funcionarios = [func1, func2, prof1, prog1];

funcionarios.forEach(f => {
  f.exibirDados();
  console.log(`Bônus: R$ ${f.calcularBonus().toFixed(2)} | Salário Final: R$ ${f.calcularSalarioFinal().toFixed(2)}`);
  console.log("----------------------------------------");
});