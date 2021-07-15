import { elevarAoQuadrado, somaNumeros, somentePares } from "./exercicios-javascript";

describe("Exercicios Javascript", () => {

    describe("Somente pares", () => {
        it("Deve retornar somente os números pares dado um determinado vetor", () => {
            const input = [1, 2, 3, 4];
            const result = [2, 4];
            expect(somentePares(input)).toEqual(result);
        })
    });

    describe("Soma total", () => {
        it("Deve retornar a soma de todos os items do array", () => {
            const input = [1, 2, 3, 4];
            const result = 10;
            expect(somaNumeros(input)).toEqual(result);
        })
    });

    describe("Elevar ao quadrado", () => {
        it("Deve retornar o quadrado de cada item do array", () => {
            const input = [1, 2, 3, 4];
            const result = [1, 4, 9, 16];
            expect(elevarAoQuadrado(input)).toEqual(result);
        })
    });
})
