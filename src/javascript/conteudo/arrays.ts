
const arrayNumeros = [1, 2, 3, 4, 5];

const arrayDeObjetos = [
    { nome: 'Alan', },
    { nome: 'Nathan', },
]

const matriz2d = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
]

const dobroNumeros = arrayNumeros
    .map(x => x * 2);

const numerosComoStrings = arrayNumeros
    .map(x => x.toString());

const listaDeNomes = arrayDeObjetos
    .map(pessoa => pessoa.nome);

const nomesQueComecamComA = listaDeNomes
    .filter(nome => nome.startsWith('A'));

const totalNumeros = arrayNumeros
    .reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual
    }, 0)

const alan = arrayDeObjetos.find(pessoa => pessoa.nome === 'Alan');