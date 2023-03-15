class Animal {
    constructor(n, comp, a, np, c, ambi, v){
        this.nome = n,
        this.comprimento = comp,
        this.altura = a,
        this.nPatas = np,
        this.cor = c
        this.ambiente = ambi,
        this.velocidade = v
        
    }

    AlterarNome(n){
        this.nome = n
    }
    AlterarComprimento(comp){
        this.comprimento = comp
    }
    AlterarAltura(a){
        this.altura = a
    }
    AlterarPatas(np){
        this.nPatas = np
    }
    AlterarCor(c){
        this.cor = c
    }
    AlterarAmbiente(ambi){
        this.ambiente = ambi
    }
    AlterarVelocidade(v){
        this.velocidade = v
    }

    Dados(){
        let x = `
        Nome: ${this.nome}
        Comprimento: ${this.comprimento}
        Patas: ${this.patas}
        Cor: ${this.cor}
        Ambiente: ${this.ambiente}
        Velocidade: ${this.velocidade}
        `
        return x;
    }

}

class Peixe extends Animal{
    constructor(n, comp, a, np, c, ambi, v, carac){
        super(n, comp, a, np, c, ambi, v)
        this.caracteristica = carac
    }
}

class Mamifero extends Animal{
    constructor(n, comp, a, np, c, ambi, v, aFav){
        super(n, comp, a, np, c, ambi, v)
        this.alimentoFavorito = aFav

    }
}

let bacalhau = new Peixe ("Bacalhau", 1, 0, "Cinzenta", "Mar", 13.5, "Barbatanas")
let urso = new Mamifero ("Urso", 2, 4, "Castanho", "Terra", 56.2, "Mel")

let camelo = new Animal("Camelo", 150, 4, "Amarelo", "Terra", 2);
let tubarao = new Peixe("Tubarão", 300, 0, "Cinzento", "Mar", 1.5, "Barbatanas");
let ursoCanada = new Mamifero("Urso-do-Canadá", 180, 4, "Vermelho", "Terra", 0.5, "Mel")


console.log(Peixe.Dados());
console.log(Mamifero.Dados());

// TESTE ZOO
console.log("\n ---- ZOO ---- \n")

console.log(camelo.Dados());
console.log(tubarao.Dados());
console.log(ursoCanada.Dados());