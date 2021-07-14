for (let i = 0; i < 10; i++) {
    console.log(i);
}

let j = 0;
while (j < 10) {
    j++;
    console.log(j);
    continue;
    console.log(j);
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
labelWhile:
while (h < 10) {
    h++;
    if (h === 5) {
        continue;
    }
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
}

const listaParaIterar = [1, 2, 3];

for (let valorDaLista of listaParaIterar) {
    console.log(`valor da lista: ${valorDaLista}`);
}







