let result;

const minhaPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve(('resultado')), 1000);
})
console.log("um")
minhaPromise.then(value => {
    console.log(value)
    console.log("tres")
})
minhaPromise.catch(error => {
    console.log(error)
})
console.log("dois")

// console.log(result);

async function fn() {
    return 10
}

async function programa() {
    const x = await fn()
}

async function funcaoAsync() {
    const resultado = await minhaPromise;
    console.log(resultado);
    const resultado2 = await new Promise<string>((resolve, reject) => {
        setTimeout(() => resolve('resultado2'), 5000);
    });
    console.log(resultado2);
    return resultado + resultado2;
}

function funcaoAsync2() {
    return new Promise<string>(resolve => {
        return resolve(minhaPromise)
    })
        .then(resultado1 => {
            return new Promise<string>((resolve, reject) => {
                setTimeout(() => resolve('resultado2'), 5000);
            })
                .then(resultado2 => {
                    return resultado1 + resultado2;
                });
        })
        .then(final => {
            console.log(final)
            return final
        })

}

funcaoAsync2().then(resultado => {
    console.log(resultado)
})

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


