const pessoa = {
    nome : 'João',
    idade : 35
}

function imprimirPessoa({nome, idade}){
    console.log(nome, idade)
}

imprimirPessoa(pessoa);

const vetor = ["joao",25];

function imprimirVetor([nome, idade]){
    console.log(nome, idade);
}

imprimirVetor(vetor)