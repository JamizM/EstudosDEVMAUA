// faça um programa que a partir de uma variável n (número de 1 a 7) imprima o dia da semana correspondente (1 - domingo, 2 - segunda, 3 - terça, 4 - quarta, 5 - quinta, 6 - sexta, 7 - sábado)
// ATENÇÃO: obrigatório utilizar switch case e caso o número não seja válido (fora do intervalo 1-7), imprima "número inválido"

function ex4(){
    const escolha: number = 4

    switch(escolha){
        case 1:
            console.log("Segunda feira")
            break
        case 2:
            console.log("Terca feira")
            break
        case 3: 
            console.log("Quarta feira")
            break
        case 4: 
            console.log("Quinta feira")
            break
        case 5: 
            console.log("Sexta feira")
            break
        case 6:
            console.log("Sabado")
            break
        case 7: 
            console.log("Domingo")
            break
        default:
            console.log("numero invalido")
    }
}

ex4()
