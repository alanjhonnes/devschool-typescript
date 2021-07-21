/**
 * Faça a função retornar um array somente com os números pares
 * @param numeros 
 */
export function somentePares(numeros: number[]): number[] {
    return numeros.filter(ehPar);
}

const ehPar: (x: number) => boolean = x => x % 2 === 0;

console.log(somentePares([1, 2, 3, 4]));

/**
 * Complete a função para retornar a soma de todos os números do vetor
 * @param numeros 
 */
export function somaNumeros(numeros: number[]): number {
    return numeros.reduce(soma, 0);
}

function soma(a: number, b: number): number {
    return a + b;
}

/**
 * Complete a função para retornar um vetor com o quadrado de cada valor
 * @param numeros 
 */
export function elevarAoQuadrado(numeros: number[]): number[] {
    return numeros.map(x => x * x);
}

console.log(elevarAoQuadrado([1, 2, 3, 4]));
