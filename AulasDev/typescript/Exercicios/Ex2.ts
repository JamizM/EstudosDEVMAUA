// crie um tipo personalizado utilizando type ou interface de um cachorro, ele deve ter as propriedades nome, idade e raça 
// utilize esse tipo persoanlizado para criar dois cachorros e imprima eles no console

function ex2(){
    type Cachorro = {
        nome: string
        idade: number
        raca: string
    }

    const meuCachorro: Cachorro = {
        nome: "rex",
        idade: 23,
        raca: "shi-tzu"
    }
    console.log("Nome do chachorro", meuCachorro.nome)
    console.log("idade", meuCachorro.idade)
    console.log("Raca do cachorro", meuCachorro.raca)
}

ex2()