// Declaração de variáveis

// "let" possibilita a alteração da variável
export let a: number;

a = 10;
a = 20;

// Declarações de constantes não podem sofrer alteração posteriormente, então precisam ser inicializadas com um valor
const x = 5;
// Inicializações de valores básicos:

if (true) {
    let y = 10

    y = 20

    const b = a + y
}

const str = 'string';
let string2 = 'string'

const str2 = str + string2

if (str === string2) {

}

const valor1: any = 0
const valor2: any = "0"

if (valor1 === valor2) {
    console.log(true)
}

const nbr = 1234.5678

const nul = null;

const undef = undefined;

const array = [];

const arrayComValores = [1, 2, 3, ''];

const array2d = [
    [1, 2, 3],
    [4, 5, 6],
]

const objeto: any = {
    a: null
};

console.log(objeto.a)

const objetoComPropriedades = {
    nome: 'valor',
    turma: 1,
}

