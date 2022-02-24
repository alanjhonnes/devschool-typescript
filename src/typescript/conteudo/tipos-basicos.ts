export let str: string = "";

export let numbr: number = 10;

export const alan = "alan"

export let fn = function () {
    return true;
};

export const arr: string[] = [];

export type Pessoa = {
    nome: string;
    idade: number;
}

export const pessoa: Pessoa = {
    nome: 'dfg',
    idade: 1
}

export type Tupla = [string, number]

const tupla: Tupla = ['1', 1];


export type FuncaoSoma = (a: number, b: number) => number;

export const typedFn: FuncaoSoma = (a, b) => {
    return a + b;
}
