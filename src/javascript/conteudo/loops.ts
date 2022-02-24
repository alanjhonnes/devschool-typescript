const vetor = [1, 2];
const tamanhoVetor = vetor.length;
for (let i = 0; i < tamanhoVetor; i++) {
    console.log(i);
    const val = vetor[i]
    console.log(val)
}

let j = 0;
let pessoaEncontrada = false
while (j < 5) {
    pessoaEncontrada = true;
    console.log(j);
    j++
}

let k = 0;
do {
    k++;
    console.log(k);
    continue;
    console.log(k);
}
while (k < 10);

// 
let h = 0;
let l = 0;

while (h < 10) {
    h++;
    if (h === 5) {
        continue;
    }
    labelWhile:
    while (l < 5) {
        l++;
        if (h === 2) {
            break labelWhile;
        }
    }
}


const objetoParaIterar = {
    propriedade1: 1,
    propriedade2: 2,
    propriedade3: 3,
}

for (let propriedade in objetoParaIterar) {
    console.log(`propriedade do objeto: ${propriedade}`);
    const val = objetoParaIterar[propriedade]
}

const listaParaIterar = [1, 2, 3];

for (let valorDaLista of listaParaIterar) {
    console.log(`valor da lista: ${valorDaLista}`);
}





