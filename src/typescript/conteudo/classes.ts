class MinhaClasse {

    // variável privada via javascript
    #_propriedade = 100;

    // variável pseudo-privada via typescript
    private privada = 200;

    // variável protegida via typescript
    protected protegida = 300;

    // variáveis publicas
    publica1 = 1;
    public publica2 = 2;

    // propriedades podem ser declaradas no construtor para evitar repetição
    constructor(public publica3 = 3) {

    }

    metodo() {
        return this.#_propriedade * 100;
    }

    get propriedade() {
        return this.#_propriedade;
    }

    set propriedade(valor: number) {
        this.#_propriedade = valor;
    }
}


