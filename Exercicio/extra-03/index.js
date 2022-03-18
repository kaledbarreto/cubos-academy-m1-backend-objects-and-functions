const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de Itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a Pagar: R$ ${this.calcularTotalAPagar()}`);
    },
    addProduto: function (produto) {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id && i !== this.produtos.length - 1) {
                this.produtos[i].qtd += produto.qtd;
            } else {
                this.produtos.push(produto);
                break;
            }
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log("\n");

        for (let i = 0; i < this.produtos.length; i++) {
            console.log(`Item ${i + 1} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${((this.produtos[i].qtd * this.produtos[i].precoUnit) / 100).toFixed(2)} `);
        }

        console.log("\n");
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()} `);
    },
    calcularTotalDeItens: function () {
        let quantidadeItens = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            quantidadeItens += this.produtos[i].qtd;
        }
        return quantidadeItens;
    },
    calcularTotalAPagar: function () {
        let precoTotal = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            precoTotal += this.produtos[i].qtd * this.produtos[i].precoUnit;
        }
        return (precoTotal / 100).toFixed(2);
    },
    calcularDesconto: function () {
        let maisBarato = 0;
        let descontoMaisBarato = 0;
        let descontoDezPorcento = 0;

        if (this.calcularTotalDeItens() > 4) {
            for (let i = 0; i < this.produtos.length; i++) {
                if (i === 0) {
                    maisBarato = this.produtos[i].precoUnit;
                } else if (this.produtos[i].precoUnit < maisBarato) {
                    maisBarato = this.produtos[i].precoUnit;
                }
            }
            descontoMaisBarato = this.calcularTotalAPagar() - (maisBarato / 100);
        }

        if (this.calcularTotalAPagar() > 100) {
            descontoDezPorcento = this.calcularTotalAPagar() - (this.calcularTotalAPagar() * 0.1);
        }

        if (descontoMaisBarato !== 0 && descontoMaisBarato < descontoDezPorcento) {
            // console.log(`Descontei: ${descontoMaisBarato}`);
            return descontoMaisBarato;
        } else if (descontoDezPorcento !== 0 && descontoDezPorcento < descontoMaisBarato) {
            // console.log(`Descontei: ${descontoDezPorcento}`);
            return descontoDezPorcento;
        } else {
            // console.log(`Descontei: ${descontoDezPorcento}`);
            return descontoDezPorcento;
        }
    }
}

// const novaBermuda = {
//     id: 2,
//     nome: "Bermuda",
//     qtd: 3,
//     precoUnit: 5000
// };

// carrinho.addProduto(novaBermuda);
// carrinho.imprimirResumo();

// const novoTenis = {
//     id: 3,
//     nome: "Tenis",
//     qtd: 1,
//     precoUnit: 10000
// }
// carrinho.addProduto(novoTenis);
// carrinho.imprimirResumo();

// carrinho.imprimirDetalhes();
// carrinho.imprimirResumo();

// carrinho.calcularDesconto();
