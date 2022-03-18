let andre = {
  nome: "André",
  altura: 1.43,
  idade: 13,
  profissao: "Estudante",
  apresentar: function () {
    console.log(`Olá! Meu nome é ${this.nome}, sou um ${this.obterFaixaEtaria(this.idade)} de ${this.idade}, ${this.altura}m de altura e sou ${this.profissao}`); //Como a função esta dentro de um objeto, em vez de colocar "pessoa.idade", agora é 
  },
  obterFaixaEtaria: function () {
    if (this.idade <= 25) {
      return "Jovem";
    } else if (this.idade > 25 && this.idade < 65) {
      return "Adulto";
    } else {
      return "Idoso";
    }
  }
};

andre.apresentar(); //Como a função já esta dentro do objeto, não precisa passar o parâmetro.
console.log(andre.obterFaixaEtaria());
