// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    // Sua implementação aqui
let mensagem = "";

    switch(number){
        case 1:
            mensagem = "Domingo";    
            break;           
        case 2:
            mensagem = "Segunda-feira";
            break;      
        case 3:
            mensagem = "Terça-feira";
            break;      
        case 4:
            mensagem = "Quarta-feira";
            break;      
        case 5:
            mensagem = "Quinta-feira";
            break;      
        case 6:
            mensagem = "Sexta-feira";
            break;      
        case 7:
            mensagem = "Sábado";
            break;  
        default:
            mensagem =  "Número inválido";         
    }
    return mensagem;
}

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    // Sua implementação aqui
let preco = '';    
    switch(code){
        case 'A':
            preco = 10.99;
            break;
        case 'B':
            preco = 5.99;
            break;
        case 'C':
            preco = 7.5;
            break;
        default: 
            preco = "Código inválido";   
    }
    return preco;
}

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    // Sua implementação aqui
let categoria = '';    
    switch(type){
        case 'Eletrônicos':
            categoria = 'Tecnologia';
            break;
        case 'Roupas':
            categoria = 'Moda';
            break;    
        case 'Alimentos ':
            categoria = 'Alimentação';
            break;
        default:
            categoria = 'Categoria desconhecida';    

    }
    return categoria;
}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };