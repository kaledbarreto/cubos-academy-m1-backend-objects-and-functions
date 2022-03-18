function verificaIdade(idade) {
  if (idade <= 25) {
    return "Jovem";
  } else if (idade > 25 && idade < 65) {
    return "Adulto";
  } else {
    return "Idoso";
  }
}

function apresentar(pessoa) {
  console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${verificaIdade(pessoa.idade)} de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}

const Andre = {
  nome: "André",
  altura: 1.43,
  idade: 13,
  profissao: "Estudante"
}

apresentar(Andre);

const Lucas = {
  nome: "Lucas",
  altura: 1.86,
  idade: 27,
  profissao: "Médico"
}

apresentar(Lucas);

const Rosa = {
  nome: "Rosa",
  altura: 1.69,
  idade: 74,
  profissao: "Professora"
}

apresentar(Rosa)
