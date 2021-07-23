let alan = "Alan";
const id = 1;

type YesOrNo = "y" | "n";

const alwaysTrue: false = false;

function shouldContinue(input: YesOrNo): boolean {
    if (input === "y") {
        return true;
    }
    return false;
}

type Generico<TipoItem extends number, TipoNome = string> = {
    item: TipoItem,
    nome: TipoNome
}

const generico: Generico<1 | 2 | 3> = {
    item: 3,
    nome: 'nome'
}
