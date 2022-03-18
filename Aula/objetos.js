//Declarando um Objeto
const pessoa = {
  nome: "Kaled",
  idade: 19,
  altura: 1.70,
  temCNH: false,
  apelidos: ["Karedo", "Chernoled"]
};

//Acessando um Objeto (Para acessar cada elemento, basta apenas por um ".")
console.log(`Bem-Vindo, ${pessoa.nome}, você tem ${pessoa.idade}!`);

//Acessando um Objeto com Colchetes (Para acessar cada elemento, basta apenas por um " [" "] ")
console.log(`Bem-Vindo, ${pessoa["nome"]}, você tem ${pessoa["idade"]}!`);

//Outra forma

const propriedade = "nome";
console.log(`Bem-Vindo, ${pessoa[propriedade]}, você tem ${pessoa["idade"]}!`);