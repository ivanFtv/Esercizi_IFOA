// CALLBACKS
// LA CALLBACK E UNA FUNZIONE CHE VIENE PASSATA COME ARGOMENTO AD UN ALTRA FUNZIONE
function pippo(paperino, milliseconds) {
    console.log('Inizio operazione async');
    setTimeout(() => {
        console.log('Operazione async completata dopo 5 secondi');
        x = 5+5
        paperino(x);
    }, milliseconds);
    console.log('Fine operazione async');
}

function paperino(x) {
    console.log(x);
}

pippo(paperino, 2000);

// ESEMPIO DI CALLBACK CONOSCIUTA IL NOSTRO FEDELE setTimeout
setTimeout(paperino, 2000)


// CALLBACK MULTIPLE
function operazione1(callback1) {
    setTimeout(() => {
        console.log('Operazione 1 completata dopo 2 secondi');
        callback1();
    }, 2000);
}

function operazione2(callback2) {
    setTimeout(() => {
        console.log('Operazione 2 completata dopo 2 secondi');
        callback2();
    }, 2000);
}

function operazione3(callback3) {
    setTimeout(() => {
        console.log('Operazione 3 completata dopo 2 secondi');
        callback3();
    }, 2000);
}

// RICHIAMO LE CALLBACK  IN ORDINE
// SI DEFINISCE CALLBACK HELL
function eseguiOperazioni() {
    operazione1(() => {
        operazione2(() => {
            operazione3(() => {
                console.log('Operazioni completate');
            })
        })
    })
}


eseguiOperazioni();



// PROMISES
// LA PROMISE RESTITUISCE UNA PROMESSA DI UNA FUTURA OPERAZIONE
// QUANDO VIENE RISOLTA LA PROMESSA, VIENE ESEGUITA LA CALLBACK O IL CODICE CHE DEFINIAMO NEL .then() ALTRIMENTI VIENE ESEGUITO IL CODICE NEL .catch() PER LA GESTIONE DEGLI ERRORI
function recuperaDati() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dati = {
                nome: 'Mario', 
                cognome: 'Rossi'
            };
            const operazioneRiuscita = false;

            if (operazioneRiuscita) {
                resolve(dati);
            } else {
                reject(err);
            }
        }, 2000);
    });
}

recuperaDati()
.then((res) => { // CODICE CHE ESEGUO SE RISOLTA
    console.log(res);
})
.catch((err) => { // CODICE CHE ESEGUO SE RIFIUTATA
    console.log(err.type);
});


// PROMISES MULTIPLA
function primaOperazione() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Prima operazione completata');
            resolve(1);
        }, 2000);
    });
}

function secondaOperazione(dato) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Seconda operazione completata', dato);
            resolve(dato + 1);
        }, 2000);
    });
}

function terzaOperazione(dato) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Terza operazione completata', dato);
            resolve( dato + 1);
        }, 2000);
    });
}


primaOperazione()
.then((dato) => {
    return secondaOperazione(dato);
})
.then((dato) => {
    return terzaOperazione(dato);
})
.then((dato) => {
    console.log('Operazioni completate', dato);
})


// IL NOSTRO CARO FETCH E' PROPRIO UNA PROMISE
const url = 'https://striveschool-api.herokuapp.com/books';

async function getPosts() {
    console.log('Inizio operazione');
    fetch(url)
    .then((response) => {
        response.json() // ANCHE QUESTO RESTITUISCE UNA PROMISE
        .then((data) => { //QUINDI POSSO USARE IL .then() PER ACCEDERE AI DATI UNA VOLTA CHE SONO STATI CONVERTITI IN JSON
            console.log(data.title);
        })
    })
}

getPosts();


// FETCH POST
// const url = 'https://jsonplaceholder.typicode.com/posts/edit/1';

// function createPost() {
//     console.log('Inizio operazione');

//     fetch(url, {
//         method: 'PATCH',    // GET, POST, PUT, DELETE, PATCH
//         body: JSON.stringify({
//             email: 'mail',
//         })
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
// }

// createPost();


// FETCH FORMDATA
// const formData = new FormData();
// formData.append('nome', 'Mario');
// formData.append('cognome', 'Rossi');

// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authentication': token,
//         // 'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//         nome: 'Mario',
//         cognome: 'Rossi',
//         citta: 'Roma',
//         telefono: '3333333333'
//     })
// }


// fetch(url, options)
// .then((response) => {
//     if (!response.ok) {
//         console.log(response.statusText);
//     } else {
//         response.json()
//         .then((data) => {
//             console.log(data);
//         })
//     }
// })