// Converte uma string para um número inteiro
function convertToInt(string) {
    let stringConvertedInt = parseInt(string)
    return stringConvertedInt;
}

// Converte um número inteiro para uma string
function convertToString(number) {
    let IntConvertedString = number.toString();
    return IntConvertedString;
}

// Converte um valor para um booleano
function convertToBoolean(value) {
    return !!value;
}

module.exports = { convertToInt, convertToString, convertToBoolean };