

const minhaPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve('resultado'), 1000);
})

minhaPromise.then(resultado => {
    console.log(resultado) // vai printar 'resultado' após 1 segundo
})


