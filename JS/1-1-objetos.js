class ModuloDeImpressao {
    constructor() {
        this._codigo = 10;
    }
    imprime = () => {
        console.log(this);
    }
}

const modulo = new ModuloDeImpressao();
modulo.imprime(["joao","andré"])
