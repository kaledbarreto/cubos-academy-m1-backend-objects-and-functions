const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],
  depositar: function (valor) {
    this.saldo += valor;
    this.historicos.push({
      tipo: "Depósito",
      valor: valor
    });
    console.log(`Deposito de R$ ${(valor / 100).toFixed(2)} realizado para o(a) cliente: ${this.nome}.`);
  },
  sacar: function (valor) {
    if (valor > this.saldo) {
      console.log(`Saldo insuficiente para o saque de: ${this.nome}.`)
    } else {
      this.saldo -= valor;
      this.historicos.push({
        tipo: "Saque",
        valor: valor
      });
      console.log(`Saque de R$ ${(valor / 100).toFixed(2)} realizado para o(a) cliente: ${this.nome}.`);
    }
  },
  extrato: function () {
    console.log(`Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(2)}`);
    console.log("Histórico:");
    for (let i = 0; i < this.historicos.length; i++) {
      console.log(`${this.historicos[i].tipo} de R$${(this.historicos[i].valor / 100).toFixed(2)}`);
    }
  }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();