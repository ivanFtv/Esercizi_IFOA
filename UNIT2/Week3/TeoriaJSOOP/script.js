// const Macchina = function () => {
//   finestrini = 'chiusi';
//   pressioneRuote = 2.5;

//   accendi = () => {
//     this.motore = 'acceso';
//   }
//   spegni = () => {
//     this.motore = 'spento';
//   }

//   abbassaFinestrini = () => {
//     this.finestrini = 'abbassati';
//   }
//     alzaFinestrini = () => {
//         this.finestrini = 'chiusi';
//     }
// }



// const Trattore = function () => {
//   finestrini = 'chiusi';
//   pressioneRuote = 3.5;

//   accendi = () => {
//     motore = 'acceso';
//   }
//   spegni = () => {
//     motore = 'spento';
//   }

//   abbassaFinestrini = () => {
//     finestrini = 'abbassati';
//   }
//   alzaFinestrini = () => {
//     finestrini = 'chiusi';
//   }
// }


// const Motore = () => {
//     stato = 'spento';
//     accendi = () => {
//         stato = 'acceso';
//     }
//     spegni = () => {
//         stato = 'spento';
//     }
// }

// const Sterzo = () => {
//     angolo = 0;
//     ruota = 0;
//     giraSinistra = () => {
//         angolo = 45;
//         ruota = 45;
//     }
//     giraDestra = () => {
//         angolo = -45;
//         ruota = -45;
//     }
// }

// const FerrariBerlinetta = () => {
//     motore = new Motore();
//     sterzo = new Sterzo();

//     sterzo.giraDestra();
//     sterzo.giraSinistra();
// }

// const FiatPanda = () => {
//     motore = new Motore();
//     sterzo = new Sterzo();

//     sterzo.giraDestra();
//     sterzo.giraSinistra();
// }



// class Persona (nome, cognome) {
//     this.nome = nome;
//     this.cognome = cognome;

//     function getData () {
//         console.log(nome + ' ' + cognome);
//     }
// }

// function Programmatore (linguaggi) {
//     // Programmatore.prototype = new Persona();
//     let linguaggi = linguaggi;

//     let nome = 'Mario';
//     let cognome = 'Rossi';

//     function getData () {
//         return nome + ' ' + cognome + ' ' + linguaggi;
//     }
// }


// const persona1 = function (nome, cognome) {
//     this.nome = nome;
//     this.cognome = cognome;

//     this.getData = function () {
//         console.log(nome + ' ' + cognome);
//     }
// }

// const persona2 = function (nome, cognome) {
//     this.nome = nome;
//     this.cognome = cognome;

//     this.getData = function () {
//         console.log(nome + ' ' + cognome);
//     }
// }

// const oggetto = {
//     nome: 'Mario',
//     cognome: 'Rossi',
//     citta: 'Roma',
//     paese: 'Italia',
// }



// const Persona = function (nomeR, cognomeR) {
//     this.nome = nomeR;
//     this.cognome = cognomeR;

//     this.getData = function () {
//         console.log(this.nome + ' ' + this.cognome);
//     }
// }

// const Programmatore = function (nomeR, cognomeR) {
//     Persona.call(this, nomeR, cognomeR);
// }


class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }

    _salute = 100;

    getSalute() {
        console.log(this._salute);
    }

    setSalute(valore) {
        if (valore < 0) {
            valore = 0;
        }
        if (valore > 100) {
            valore = 100;
        }
        this._salute = valore;
    }

    salutaBene() {
        console.log('Ciao sono ' + this.nome + ' ' + this.cognome);
    }

    static saluta() {
        console.log('Ciao sono una persona');
    }
}

class Programmatore extends Persona {
    constructor(nome, cognome, linguaggio, anniEsperienza) {
        super(nome, cognome);
        this.linguaggio = linguaggio;
        this.anniEsperienza = anniEsperienza;
    }

    presentati() {
        super.saluta();
        console.log('Programmo in ' + this.linguaggio + ' da ' + this.anniEsperienza + ' anni');
    }
}

// Persona.getData();

// const persona2 = new Persona();
// persona1 = new Persona('Mario', 'Rossi');
// persona1.saluta();
// persona2.getData();

Persona.saluta();

antonio = new Persona('Antonio', 'Verdi');
antonio._salute = 10000;

// programmatore1 = new Programmatore('Giulio', 'Verdi', 'Javascript', 10);
// programmatore1.presentati();






class CasaCostruttrice {
    constructor(nome, sede) {
        this.nome = nome;
        this.sede = sede;
        this._capitale = 100000;
    }

    getNome() {
        console.log(this.nome);
    }

    getSede() {
        console.log(this.sede);
    }

    setCapitale(valore) {
        this._capitale = valore;
    }

    brochure() {
        console.log('Siamo ' + this.nome + ' e siamo di ' + this.sede);
    }
}

class Concessionaria extends CasaCostruttrice {
    constructor(nome, sede, numeroDipendenti) {
        super(nome, sede);
        this.numeroDipendenti = numeroDipendenti;
    }

    getNome() {
        console.log(this.nome + ' concessionaria');
    }

    vendita(value) {
        this.setCapitale(this._capitale + value);
    }

    brochureConcessionaria() {
        super.brochure();
        console.log('Questa e la concessionaria');
    }

    getDipendenti() {
        console.log(this.numeroDipendenti);
    }
}


class Suv extends Concessionaria {
    constructor(nome, sede, numeroDipendenti, modello, colore, prezzo) {
        super(nome, sede, numeroDipendenti);
        this.modello = modello;
        this.colore = colore;
        this.prezzo = prezzo;
    }

    getProvenienza() {
        console.log('Arrivo dalla sede di ' + this.sede + ' di ' + this.nome);
    }

    getColore() {
        console.log(this.colore);
    }

    getPrezzo() {
        console.log(this.prezzo);
    }

    getModello() {
        console.log(this.modello);
    }
}

RangeRoverEvoque = new Suv('Range Rover', 'Roma', 10, 'Evoque', 'Nero', 50000);
RangeRoverEvoque.getProvenienza();
RangeRoverEvoque.getColore();
RangeRoverEvoque.getModello();
RangeRoverEvoque.getPrezzo();
RangeRoverEvoque.getDipendenti();
RangeRoverEvoque.brochure();
RangeRoverEvoque.brochureConcessionaria();
RangeRoverEvoque.getNome();


FerrariSUV = new Suv('Ferrari', 'Milano', 50, 'SUV', 'Rosso', 500000);
FerrariSUV.getProvenienza();
FerrariSUV.getColore();
FerrariSUV.getModello();
FerrariSUV.getPrezzo();
FerrariSUV.getDipendenti();
FerrariSUV.brochure();
FerrariSUV.brochureConcessionaria();
FerrariSUV.getNome();

// class Berlina extends Concessionaria {
//     constructor(nome, sede, numeroDipendenti, modello, colore, prezzo) {
//         super(nome, sede, numeroDipendenti);
//         this.modello = modello;
//         this.colore = colore;
//         this.prezzo = prezzo;
//     }
// }



class Motore {
    constructor() {
        this.stato = 'spento';
    }

    acceso() {
        this.stato = 'acceso';
    }

    spento() {
        this.stato = 'spento';
    }
}

class Sterzo {
    constructor(angolo = 10, ruota = 10) {
        this.angolo = angolo;
        this.ruota = ruota;
    }

    giraDestra () {
        this.angolo = -45;
        this.ruota = -45;
    }

    giraSinistra () {
        this.angolo = 45;
        this.ruota = 45;
    }
}

class FerrariBerlinetta {
    constructor() {
        this.motore = new Motore();
        this.sterzo = new Sterzo('angolo', 10);
    }

    getData() {
        console.log(this.sterzo);
    }

    giraDestra() {
        this.sterzo.giraDestra();
    }

    giraSinistra() {
        this.sterzo.giraSinistra();
    }
}

class FiatPanda {
    constructor() {
        this.motore = new Motore();
        this.sterzo = new Sterzo();
    }

    giraDestra() {
        this.sterzo.giraDestra();
    }

    giraSinistra() {
        this.sterzo.giraSinistra();
    }
}


const auto = new FerrariBerlinetta();
auto.getData();





