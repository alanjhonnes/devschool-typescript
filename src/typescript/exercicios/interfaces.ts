// Crie uma interface para representar cada um dos objetos abaixo e coloque o tipo apropriado para cada uma das constantes.

export interface Linguagem {
    nome: string;
    tipada: boolean;
}

const linguagem: Linguagem = {
    nome: 'Typescript',
    tipada: true,
}

export interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
    amigos: Pessoa[];
}

const pessoa: Pessoa = {
    nome: 'Alan',
    sobrenome: 'Jhonnes',
    idade: 31,
    amigos: [
        {
            nome: 'Nathan',
            sobrenome: 'Lima',
            idade: 22,
            amigos: [],
        }
    ]
}


