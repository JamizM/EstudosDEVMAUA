// crie uma mensagem que tenha o seu nome (const), sua idade (const) e o seu ano da mauá (const) em uma string apenas
// ao fim imprima essa mensagem no console
// ATENÇÃO: obrigatório utilizar template string

function ex3(){
    const nome: string = "Joao"
    const idade: number = 23
    const anoFacul: number = 2

    const frase = `meu nome é ${nome} tenho ${idade} anos e tenho ${anoFacul} de faculdade`
    console.log(frase)
}


ex3()