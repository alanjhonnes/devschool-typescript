import { sum } from "./src/typescript/exercicios/1-tipos-basicos";

describe('index', () => {
    it('test sum', () => {
        expect(sum(1, 2)).toBe(3);
    })

    it('should sum 2 and 4', () => {
        expect(sum(2, 4)).toBe(6);
    });
});
