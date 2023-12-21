<!-- SCOPE
VAR => scope di funzione, significa che una var dichiarata all'interno di una funzione è visibile in tutto l'ambito di funzione
CONST E LET => scope di blocco, significa che il loro scope è solo nel blocco dove sono dichiarate


VAR aveva appunto il problema che poteva essere visibile in contesti non voluti
un esempio è ancora oggi la mancata dichiarazione di let i nei cicli for, senza dichiarazione diventa var e puo portare problemi


<!-- ----------------------------------- -->

<!-- CONTESTO // THIS -->

<!-- Contesto globale -->
console.log(this) <!-- Loggera le informazioni relative la finestra del browser -->


<!-- Metodi di un oggetto -->
Se la funzione è un metodo di un oggetto il this si riferisce all'oggetto stesso

const persona = {
    nome: "Mario",
    saluta: function() {
        console.log("Ciao sono " + this.nome);
    }
};

persona.saluta(); <!--Ciao Sono Mario-->


<!-- Funzione normale -->
In una funzione definita globalmente nel root il contesto di default è l'oggetto globale (window)

const nome = "Mario";

function stampaNome() {
    console.log(this.nome);
}

stampaNome(); <!--Mario-->


<!-- Costruttore -->
In una chiamata a costruttore di una nuova funzione, this puntera alla nuova istanza

function MyClass() {
  this.myProperty = 42;
}

var myInstance = new MyClass();
console.log(myInstance.myProperty); <!-- Nel contesto del costruttore, this punterà a myInstance. -->


<!-- Perdita del contesto -->
La situazione piu tipica dove il this perde il contesto è nelle callback che utilizzano metodi asincroni
A causa della gestione dell'event loop di JS

const myObj = {
  value: 42,
  myMeth: function() {
    console.log(this.value); <!-- Qui tutto funziona -->
    <!-- Callback -->
    setTimeout(function() {
      console.log(this.value); <!-- Qui, il valore di this può perdere il contesto desiderato. -->
    }, 1000);
  }
};

myObj.myMeth();


<!-- Come risolvere:
1) Con una variabile -->
var myObject = {
  value: 42,
  myMethod: function() {
    var self = this; // Salva il valore di this in una variabile self
    console.log(this.value);
    <!-- Funzione di callback -->
    setTimeout(function() {
      console.log(self.value); // Usa self invece di this
    }, 1000);
  }
};

myObject.myMethod();


<!-- 2) Con il bind -->
var myObject = {
  value: 42,
  myMethod: function() {
    console.log(this.value);
    <!-- Funzione di callback con bind -->
    setTimeout(function() {
      console.log(this.value);
    }.bind(this), 1000);
  }
};

myObject.myMethod(); -->



<!-- ------------------------------ -->
<!-- EVENT LOOP -->
<!-- SCHEMINO GESTIONE EVENT LOOP
ESEMPIO CON SETTIMEOUT e async -->



<!-- -------------------------------------------- -->


<!-- DON API -->
EventListner
<!-- Problema con addEventListner e invocazione funzione-->
<!-- el.addEventListener("click", alert("clicktrack"), false); <!--Cosi il codice alert viene eseguito quando il codice viene compilato -->
el.addEventListener("click", function() { alert("clicktrack"); }, false); <!-- Soluzione è racciudere in una funzione -->


EventPropagation
EventBubling -->
<!-- Propagazione Eventi -->
<!-- Problema con il bubbling, è possibile che vengano triggerati eventi nel div genitore -->

<!-- Event delagation -->

<!-- QuerySelector -->
<!-- Ritorno NODE LIST, cos'è e come manipolare, possiede forEach ma non altri metodi array-->
<!-- QuerySelectorAll

Leggere Attributi
Iniettare Elementi -->


<!-- ------------------------------ -->
<!-- CLOSURE -->
SPIEGAZIONE CLOSURE, TEORIA
ESEMPI

<!-- ----------------------------------------------- FATTO -->
<!-- Cicli forEach , for, for..in, for..of -->
<!-- 
for => si puo definire una fine, non salta elementi vuoti stampa undefined
for..of => non salta elementi vuoti stampa undefined

forEach => cicla sul valore di tutti gli elementi di un array, salta eventuali elementi vuoti
for..in => salta eventuali elementi vuoti -->


<!-- ------------------------------------------------ -->
<!-- DESTRUTTURAZIONE  -->
La destrutturazione è una caratteristica di JavaScript per estrarre dati da array o oggetti in modo più rapido e conciso.
Può essere utilizzata per assegnare valori a variabili in modo rapido, e per accedere a proprietà o elementi senza dover fare riferimento esplicitamente all'indice o al nome della chiave.

// Array originale
const numbers = [1, 2, 3, 4, 5];

<!-- // Destrutturazione di array -->
const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

<!-- In questo esempio, la destrutturazione di array viene utilizzata per assegnare i primi due elementi dell'array alle variabili first e second, mentre il resto degli elementi viene assegnato all'array rest. -->


// Oggetto originale
const person = { 
    name: 'John', 
    age: 30, 
    city: 'New York' 
};

<!-- // Destrutturazione di oggetti -->
const { name, age } = person;

console.log(name); // 'John'
console.log(age);  // 30
s
<!-- In questo caso, la destrutturazione di oggetti viene utilizzata per estrarre i valori delle proprietà name e age dall'oggetto person e assegnarli alle variabili corrispondenti. -->


<!-- ------------------------------------ -->
<!-- MAP, FILTER E REDUCE -->

<!-- map():  -->
Questo metodo crea una nuova array applicando una funzione a ciascun elemento dell'array originale. In altre parole, map() trasforma ogni elemento dell'array utilizzando una funzione specificata e restituisce un nuovo array con i risultati.

const array = [1, 2, 3, 4, 5];
const newArray = array.map(x => x * 2);
// newArray sarà [2, 4, 6, 8, 10]

<!-- reduce():  -->
Questo metodo riduce un array a un singolo valore combinando gli elementi utilizzando una funzione di riduzione. Può essere utilizzato per sommare gli elementi, trovare il massimo, concatenare stringhe, e molto altro.

const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// sum sarà 15

<!-- filter():  -->
Questo metodo crea un nuovo array contenente solo gli elementi dell'array originale che soddisfano una condizione specificata. La funzione di filtro restituisce true o false per ogni elemento.

const array = [1, 2, 3, 4, 5];
const filteredArray = array.filter(x => x > 2);
// filteredArray sarà [3, 4, 5]


<!-- ------------------------------- -->
<!-- NPM E DEPENDENCY -->
NPM è Node Package Manager  e gestisce tutti i pacchetti/dipendenze su base node/javascript del nostro progetto creando un file package.json
I pacchetti sono presenti sul sito NPM e sono collegati a una repo GitHub
Vengono installati spesso globalmente nel sistema (PC sviluppatore)

NPX 
Tool ausilirio che viene installato con NPM che permette di scaricare ed eseguire senza installare globalmente una dipendenza
- Non si desidera installare pacchetti né globalmente né localmente.
- Non disponi dell'autorizzazione per installarlo a livello globale.
- Voglio solo testare alcuni comandi.
- A volte, si desidera avere un comando script (generare, convertire qualcosa, ...) per eseguire qualcosa senza installare questi pacchetti come dipendenze del progetto.package.json

<!-- DEPENDENCY -->
DIPENDENZA REGOLARE
Pacchetto/Modulo necessario al nostro progetto, viene installato quando eseguiamo npm run 

<!-- DEV DEPENDENCY -->
DIPENDENZA DI SVILUPPO
Pacchetto/Modulo che serve SOLO in fase di sviluppo es toolbar, tool per react ecc

<!-- PEER DEPENDENCY -->
DIPENDENZA NECESSARIA CHE L'UTENTE DEVE AVERE
Pacchetto/Modulo che l'utente deve aver installato nel suo terminale per eseguire l'app/

<!-- DIPENDENZA CIRCOLARE -->
Pratica da evitare, ovvero quando 2 moduli dipendono uno dall'altro



<!-- PROMISE.ALL -->


<!-- IMPORT EXPORT -->
