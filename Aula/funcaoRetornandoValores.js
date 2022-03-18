//Declarando função que retorna algum valor
function verificarMaiorIdade(nome, idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

let nome2 = "Kaled";
let idade2 = "19";

let ehMaiorDeIdade = verificarMaiorIdade(nome2, idade2); //OBS: As variáveis que passam aqui dentro, não precisam ter o mesmo nome que a variável da função.

console.log(ehMaiorDeIdade); //true