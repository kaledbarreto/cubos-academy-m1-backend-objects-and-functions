function corrigirProva(prova) {
    let acertos = 0;
    for (let i = 0; i < prova.questoes.length; i++) {
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
            acertos++;
        }
    }

    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} e obteve a nota ${(prova.valor / prova.questoes.length) * acertos}`);
}

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

corrigirProva(prova);