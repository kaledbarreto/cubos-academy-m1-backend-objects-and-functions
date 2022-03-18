const pessoa = {
  nome: "Kaled",
  idade: 19,
  altura: 1.70,
  temCNH: true,
  apelidos: ["Karedo", "Chernoled"]
};

let textoCNH = "";
if (pessoa.temCNH) {
  textoCNH = "possui";
} else {
  textoCNH = "não possui";
}

console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura} de altura, ${textoCNH} CNH e tem os seguintes apelidos:`);
for (let apelido of pessoa.apelidos) {
  console.log(`- ${apelido}`);
}