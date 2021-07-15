let result;

const minhaPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve('resultado'), 1000);
})


// console.log(result);

async function funcaoAsync() {
    const resultado = await minhaPromise;
    console.log(resultado);
    const resultado2 = await new Promise<string>((resolve, reject) => {
        setTimeout(() => resolve('resultado2'), 5000);
    });
    console.log(resultado2);
    return resultado + resultado2;
}

funcaoAsync()
    .then((total) => {
        console.log(total);
    });

// minhaPromise
//     .then(resultado => {
//         result = resultado;
//         console.log(resultado) // vai printar 'resultado' após 1 segundo

//         return
//     })
//     .then(resultado2 => {
//         console.log(resultado2);
//     })

// console.log(result);


