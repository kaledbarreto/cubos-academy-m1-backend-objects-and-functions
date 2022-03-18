const cliente = {
  nome: "Kaled",
  idade: 19,
  produtos: [
    {
      nome: "Feijão",
      precoUnit: 270, //Em centavos
      quantidade: 1
    },
    {
      nome: "Arroz",
      precoUnit: 320, //Em centavos
      quantidade: 2
    },
    {
      nome: "Café",
      precoUnit: 400, //Em centavos
      quantidade: 1
    }
  ]
}

// console.log(cliente);
// console.log(cliente.idade);
// cliente.idade = 20;
// console.log(cliente.idade);

// for (let i = 0; i <= cliente.produtos.length; i++) {
//   if (i === 0) {
//     console.log(cliente.produtos[i].nome);
//   } else if (i === cliente.produtos.length) {
//     console.log(cliente.produtos[i - 1].precoUnit);
//   }
// }

let valor = 0;
for (let i = 0; i < cliente.produtos.length; i++) {
  valor += (cliente.produtos[i].precoUnit * cliente.produtos[i].quantidade);
}

console.log(`${cliente.nome}, o valor a ser pago é: R$ ${(valor / 100).toFixed(2)}`);
