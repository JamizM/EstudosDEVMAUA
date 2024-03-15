// faça uma ARROW FUNCTION que some todos os números pares de 1 a 100 e imprima o resultado no console
// ATENÇÃO: obrigatório utilizar for ou while (não escrever todos os números manualmente) e obrigatório criar ARROW FUNCTION dedicada para isso

const numerosPares = () => {
    let sum = 0
    for (let i = 2; i <= 100; i+=2){ //i+=2 ocorre a pulagem de dois em dois
        sum += i
    }
    console.log("A soma dos números pares de 1 a 100 é:", sum);
}

console.log(numerosPares())