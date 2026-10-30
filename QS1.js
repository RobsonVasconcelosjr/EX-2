const alunos = [];

function cadastrarAluno(nome, idade, curso, notas) {
  alunos.push({
    nome,
    idade,
    curso,
    notas
  });
}

function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

function obterSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

function exibirAlunos() {
  alunos.forEach(aluno => {
    const media = calcularMedia(aluno.notas);
    const situacao = obterSituacao(media);
    console.log(`Nome: ${aluno.nome} | Idade: ${aluno.idade} | Curso: ${aluno.curso} | Média: ${media.toFixed(2)} | Situação: ${situacao}`);
  });
}

function informarestatísticas() {
  const contagem = alunos.reduce((acc, aluno) => {
    const media = calcularMedia(aluno.notas);
    const situacao = obterSituacao(media);
    if (situacao === "Aprovado") acc.aprovados++;
    else if (situacao === "Recuperação") acc.recuperacao++;
    else if (situacao === "Reprovado") acc.reprovados++;
    return acc;
  }, { aprovados: 0, recuperacao: 0, reprovados: 0 });

  console.log(`Aprovados: ${contagem.aprovados}`);
  console.log(`Em Recuperação: ${contagem.recuperacao}`);
  console.log(`Reprovados: ${contagem.reprovados}`);
}

cadastrarAluno("João", 20, "ADS", [8, 7, 9]);
cadastrarAluno("Maria", 22, "ADS", [6, 5, 6]);
cadastrarAluno("Pedro", 21, "ADS", [4, 3, 2]);

exibirAlunos();
informarestatísticas();