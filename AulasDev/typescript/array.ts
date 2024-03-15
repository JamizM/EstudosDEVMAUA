// type Pessoa = {
//     nome: string,
//     idade: number,
// }


const array: number[] = [1,2,3,4,5]
const array1: string[] = ["ola", "sou", "Joao"]
//começam em 0 e vao de + 1 a + 1
//possivel tambem personalizar o tipo de array
//array personalizado
const pessoas : Pessoa[] = [
    {
        nome: "enrico",
        idade: 20,
        ehMaiordeIdade: true,
    },
    {
        nome: "pedro",
        idade: 30,
        ehMaiordeIdade: true,
    }
]

//iterando sobre ps arrays

const numeros : number[] = [0,3,5,5,2,6]

// for(let i of numeros){
//     console.log(i)
// }

//usando for-each dentro
numeros.forEach((numero) => console.log(numero))