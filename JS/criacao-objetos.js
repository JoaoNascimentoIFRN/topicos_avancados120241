//Sintaxe literal
const objeto1 = {
    nome : "teste"
}
console.log(objeto1.nome);

//Usando class
class Objeto {
    constructor(nome){
        this.nome = nome;
    }
}
const objeto2 = new Objeto("Teste");
console.log(objeto2.nome);

//Função construtura
function Objeto3(nome){
    this.nome = nome;
}
const objeto3 = new Objeto3("Teste");
console.log(objeto3.nome);

const objeto4 = new Object();
objeto4.nome = "André";

class Animal {
    constructor(){

    }
}
const animal = new Animal();

const aviao = {
    nome : ""
}

