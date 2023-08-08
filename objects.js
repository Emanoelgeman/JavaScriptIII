// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    const perimetro = 2 * (retangulo.largura + retangulo.altura);
    const area = (retangulo.largura * retangulo.altura);

    return {
        perimetro: perimetro,
        area: area
    };

}

const retangulo = {
    largura: '',
    altura: '',
};
console.log(calcularRetangulo(retangulo));

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
        if (pessoa.idade >= 18){
            return true;
        }else{
            return false;
        }
    
    }
    
    const pessoa = {
        nome: 'John',
        idade: 25,
        cidade: 'New York'
    };
    
    console.log(ehAdulto(pessoa));

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    let valores = Object.values(obj);
    return valores.join(' ');
}

const obj = {
    nome: 'Bob',
    idade: 35,
    cidade: 'London'
};

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
