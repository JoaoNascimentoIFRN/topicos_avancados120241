const Pessoa = function(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.caminhar = () => console.log(this.nome);
}

const pessoa = new Pessoa("Pedro",12);
pessoa.caminhar();

const objeto = {
    valor: 1,
    incrementar: () => {
        console.log(this);
    }
};

objeto.incrementar()


