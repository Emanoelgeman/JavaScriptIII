// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    const valorInicial = 0
    const dobrarValoresInicial = numeros.map((numero) => numero * 2);
    return dobrarValoresInicial;
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    const valorInicial = 0
    const somaValoresInicial = numeros.reduce((accumulator, currentValue) => accumulator + currentValue, 
    valorInicial);
    return somaValoresInicial;
}


// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    const arraynumeros = [];
    const numerosPares = numeros.filter((numeros) => numeros % 2 == 0);
    return numerosPares;
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};