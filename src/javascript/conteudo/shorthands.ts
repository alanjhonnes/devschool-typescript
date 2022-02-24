// Shorthand de Arrow functions

const myArrowFn = (a, b) => {
    return;
};

const myArrowFnShorthand = (a, b) => ({ a: 10 });
const myArrowFnObjeto = () => ({
    resultado: 'valor'
});


const myArrowFnObjetoShorthand = () => (
    {
        resultado: 'result'
    }
);


const arrowFnComUmArgumento = x => x * 2;

let prop1 = 'a';
let prop2 = 'b';

const inicializadorDeObjeto = {
    prop1: prop1,
    prop2: prop2,
    metodo: function (arg) {
        console.log(arg)
    }
}

inicializadorDeObjeto.metodo('xpto');

const inicializadorDeObjetoShorthand = {
    prop1,
    prop2,
    metodo(arg) {
        console.log(arg)
    },
}

const duplicacaoDeObjetoComSpread = {
    ...inicializadorDeObjeto,
    propriedade: "alan"
}


