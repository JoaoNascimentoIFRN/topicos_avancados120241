const vetor1 = ["Carro", "Moto", "Bicicleta"];
const [var1, var2] = vetor1;
console.log(var1,var2);
const [, ,var3] = vetor1;
console.log(var3);

const somar = (numeros) => {
    const [a,b] = numeros;
    return a + b;
}
console.log(somar([1,2]));

//Destructuring
const objeto = {
    nome : "Avião",
    capacidade : 150
}
console.log(JSON.stringify(objeto));
const obj = '{"nome": "knjlknlk", "capacidade": 152}'
console.log(JSON.parse(obj));
