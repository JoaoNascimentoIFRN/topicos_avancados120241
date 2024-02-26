
/* Criação e manipulação de objetos em JavaScript 
   via Sintaxe Literal */

let altura = 1.97;

const pessoa = {
    nome : "João",
    idade : 45,
    altura,
    caminhar: function() {
        console.log(`${this.nome} Caminhando...`);
    },
    aplaudir: () => console.log("Aplaudindo..."),    
}

const pessoa2 = pessoa;
pessoa.nome = "Ana";
pessoa2.caminhar()

pessoa.caminhar()
pessoa.aplaudir()


console.log(pessoa["nome"]);

console.log(pessoa.nome);
console.log(pessoa.idade);


function exibirPessoa(pessoa){
    console.log(pessoa.nome);
    console.log(pessoa.idade);
}

exibirPessoa({nome: "Gustavo", idade : 48});