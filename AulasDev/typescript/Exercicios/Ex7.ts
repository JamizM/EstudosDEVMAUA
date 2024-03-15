// faça um função que receba um array de números e retorne o maior número do array
// ATENÇÃO: obrigatório criar função dedicada para isso

function ex7(num: number[]){
    let numeroMaximo = num[0]
    for (let i =0; i < num.length; i++){
        if (num[i] > numeroMaximo){ // se numero na posicao i, for maior que o numero maximo
            numeroMaximo = num[i] //atribua o numero maximo a posicao i
        }
    }
    return numeroMaximo
}

const numeroArray: number[] = [10, 5, 27, 8, 15];
console.log(ex7(numeroArray))