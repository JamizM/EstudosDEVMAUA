export class Pessoa{
    nome: string
    idade: number
    altura: number
    ra: string
    peso: number
    static especie: string = "homo sapiens" //static 

    constructor(nome:string, idade: number, altura: number, ra: string, peso: number){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.ra = ra
        this.peso = peso
    }

    calcularIMC(){
        console.log(this.peso / (this.altura * this.altura))
    }

    //métodos statico
    static saudacao(){
        console.log("oi")
    }
}

//fazer instancia fora da classe Pessoa
const pessoa : Pessoa = new Pessoa("Joao", 12, 1, "22222", 90)
console.log(pessoa)


