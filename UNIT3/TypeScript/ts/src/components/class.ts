class Persona {

    nome: string;
    cognome: string;
    eta: number;

    constructor(nome: string, cognome: string, eta: number) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }

    saluta(): string {
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta} anni`;
    }
}


let persona = new Persona('Mario', 'Rossi', 25);
