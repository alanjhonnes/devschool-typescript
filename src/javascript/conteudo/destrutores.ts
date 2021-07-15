const objetoParaDestruturar = {
    nome: 'Alan',
    numero: 1,
}

const nomeObjeto = objetoParaDestruturar.nome;
const numerobjeto = objetoParaDestruturar.numero;

const { nome: nome, numero: numero } = objetoParaDestruturar;
nome
numero

// renomeando para variáveis diferentes
const { nome: nomeAlias, numero: numeroAlias } = objetoParaDestruturar;

const arrayParaDestruturar = [1, 2, 3, 4, 5] as const;

const [um, dois, tres, ...resto] = arrayParaDestruturar;
