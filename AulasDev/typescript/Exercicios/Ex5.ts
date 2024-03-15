// escreva uma função que recebe um número como entrada e retorna verdadeiro se o número for primo e falso caso contrário. 
// um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
// ATENÇÃO: obrigatório utilizar for ou while (não escrever todos os números manualmente) e obrigatório criar função dedicada para isso

function isPrime(num: number){
    if (num <= 1){
        return false
    }
    
    for (let i = 2; i < Math.sqrt(num); i++){
        if(num % i == 0){
            return false
        }
    }
    return true
}

console.log(isPrime(13))
console.log(isPrime(10))
