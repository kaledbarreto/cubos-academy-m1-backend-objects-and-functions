const pessoa = {
  nome: "Kaled",
  idade: 19,
  altura: 1.70,
  temCNH: true,
  apelidos: ["Karedo", "Chernoled"]
};

//Manipulando Objetos
pessoa.nome = "João";
pessoa.apelidos[0] = "Fastled";
console.log(pessoa);

//Criando um novo atributos
pessoa.peso = 70;
console.log(pessoa);