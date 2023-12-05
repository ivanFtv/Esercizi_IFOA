class User {
    constructor(nome, cognome, eta, location) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.location = location;
    }

    comparaEta(user) {
        if (this.eta < user.eta) {
            console.log(`${this.nome} è più giovane di ${user.nome}`);
        } else if (this.eta > user.eta) {
            console.log(`${this.nome} è più vecchio di ${user.nome}`);
        } else {
            console.log(`${this.nome} ha la stessa età di ${user.nome}`);
        }
    }
}


user1 = new User("Mario", "Rossi", 25, "Roma");
user2 = new User("Luigi", "Verdi", 32, "Milano");
user3 = new User("Giuseppe", "Bianchi", 27, "Napoli");

user1.comparaEta(user2);
user2.comparaEta(user3);
user3.comparaEta(user1);

