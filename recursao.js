// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  // Sua implementação aqui
  if (n ==1){
    return 1;
  }else{
    return n + somaNumeros(n - 1);  
  }
}

// Verifica se um número é par
function ehPar(number) {
  if (number % 2 == 0){
    return true;
  }else{
    return false;
  }
}  

function fibonacci(n) {
  if (n <=0){
    return 0;
  }else if(n === 1){
    return 1;
  }
  else{
    return fibonacci(n - 1) + fibonacci (n - 2)
  }
  
}

module.exports = { somaNumeros, ehPar, fibonacci };