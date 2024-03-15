type Pessoa = {
    nome? : string, //interrogação é feita para caso nao exista esta variavel, nao deixe de executar este variavel de tipo
    idade : number,
    ehMaiordeIdade : boolean,
}

// const eu : Pessoa = {
//     nome: "pedro",
//     ehMaiordeIdade: true,
//     idade: 20,
// }

let pessoa: Pessoa = {nome: "Enrico", idade: 20, ehMaiordeIdade: true};
console.log(pessoa)