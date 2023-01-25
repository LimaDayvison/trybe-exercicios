const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareResposta = (corretas, doEstudante) => {
    if (corretas === doEstudante){
        return 1;
    } if (doEstudante === 'N.A'){
        return 0;
    }
    return -0.5;
};

const nota = (corretas, doEstudante, acao) => {
    let contador = 0;
    for (let index = 0; index < corretas.length; index += 1){
        const acaoRetorna = acao(corretas[index], doEstudante[index]);
        contador += acaoRetorna
    }
    return `Resultado final: ${contador} pontos`;
};

console.log(nota(RIGHT_ANSWERS, STUDENT_ANSWERS, compareResposta));