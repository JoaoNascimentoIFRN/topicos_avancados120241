//Primeiro exemplo
const somar = (a,b) => a + b;
console.log(somar(2,3));
//Segundo exemplo
const quadrado = a => a**2;
console.log(quadrado(3));
//Terceiro exemplo
const inclinacao = (x1, x2 , y1, y2) => {
    return (y1 - y2) / (x2 - x1);
}
console.log(inclinacao(5,3,2,7));
//Quarto exemplo - callback
const vetor = [1,2,3,4]
//const func = e=>console.log(e**2)
//vetor.forEach(func);

vetor.forEach(e=>console.log(e**2));
for (let i=0;i<vetor.length;i++){
    console.log(vetor[i]**2)
}
for (let valor of vetor){
    console.log(valor**2);
}

const novoVetor = [];
vetor.forEach(e=>novoVetor.push(e**2));
const novoVetor2 = vetor.map(e=>e**2);
console.log(novoVetor)
console.log(novoVetor2)
console.log(vetor)
