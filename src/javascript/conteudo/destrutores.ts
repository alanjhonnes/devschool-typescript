const objetoParaDestruturar = {
    nome: 'Alan',
    numero: 1,
}

// const nomeObjeto = objetoParaDestruturar.nome;
// const titulobjeto = objetoParaDestruturar.titulo;

const { nome = "Nathan", numero = 2 } = objetoParaDestruturar;

// renomeando para variáveis diferentes
const { nome: nomeAlias, numero: numeroAlias } = objetoParaDestruturar;

const bigInt: bigint = 234234243234n;

type X = (arg: string) => boolean;


const arrayParaDestruturar = [1, 2, 3, 4, 5] as const;

const [um, dois, tres, ...resto] = arrayParaDestruturar;
