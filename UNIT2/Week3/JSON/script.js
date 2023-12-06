
// LOCAL E SESSION STORAGE
const studente = "Mario Rossi";


localStorage.setItem('studenteLocal', studente);
sessionStorage.setItem('studenteSession', studente);


console.log(localStorage.getItem('studenteLocal'));
console.log(sessionStorage.getItem('studenteSession'));

localStorage.removeItem('studenteLocal');
sessionStorage.removeItem('studenteSession');


// CREIAMO VARIABILE JSON
const studenti = {
    "studenti": [
        {
            "nome": "alice",
            "cognome": "ddddd",
            "citta": "milano",
            "promosso": true,
            "lingue": [
                "italiano",
                "inglese"
            ],
            "compleanno": {
                "giorno": "Mercoledi",
                "mese": "Agosto",
            }
        },
        {
            "nome": "daniele",
            "cognome": "rrrrrrrr",
            "citta": "pavia",
            "promosso": false,
            "lingue": [
                "italiano",
                "inglese",
                "spagnolo"
            ],
            "compleanno": {
                "giorno": "Lunedi",
                "mese": "Novembre",
            }
        }
    ]
}

// POSSO LAVORARCI PRIMA DI STORARLA
console.log(studenti);
console.log(studenti.studenti[0].nome);
// UNA VOLTA CONVERTITA IN STRINGA NON POSSO PIU LAVORACI
const studenteJSON = JSON.stringify(studenti);
console.log(studenteJSON);
sessionStorage.setItem('studenti', studenteJSON);
// POSSO TORNARE A LAVORARCI UNA VOLTA RECUPERATA E RICONVERTITA IN JSON
const studentePARSE = JSON.parse(sessionStorage.getItem("studenti"))
console.log(JSON.parse(sessionStorage.getItem("studenti")));
console.log(studentePARSE.studenti[0].nome);

// SINTASSI ABBREVIATA PER LE 3 RIGHE SOPRA
console.log(JSON.parse(sessionStorage.getItem("studenti")).studenti[0].nome);


// XMLHTTPREQUEST (Storia delle chiamate Async)
let dataCall = new XMLHttpRequest();

dataCall.onload = function () {
    console.log(dataCall.response);
}
dataCall.open('GET', 'https://jsonplaceholder.typicode.com/users');
dataCall.send();



// FETCH
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => {
        console.log(data);
        data.forEach(element => {
            console.log(element.name);
        });
    })
    .catch(error => console.log(error));

