function soma(x: number, y: number) : number {
    return x + y
}

const resultado : number = soma(1, 2)
const resultado1 : number = soma(3, 1)
const resultado2 : number = soma(10, 2)
console.log(resultado)
console.log(resultado2)
console.log(resultado1)

//usando arrow function

const saudacao = (nome: string, idade: number, faculdade: string) => {
    console.log(`Eu sou o ${nome} tendo a idade ${idade} e faço na facul, ${faculdade}`)
}
saudacao("pedro", 20, "maua")
