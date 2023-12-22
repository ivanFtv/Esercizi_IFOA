import { todoList } from './list.js'

let listGlobal = [...todoList]

const increment = (function() {
    let counter = 0;  // Questa variabile viene mantenuta nel contesto della closure

    return function() {
        counter++;
        document.getElementById('counter').innerText = counter;
    };
})();


function showTodo() {
    const list = document.getElementById('list')  
    list.innerHTML = ''      
    listGlobal.forEach(el => {
        const li = document.createElement('li')
        const button = document.createElement('button')
        button.innerText = 'X'
        button.addEventListener('click', () => {
            deleteTodo(Object.keys(el), Object.values(el))
        })
        li.innerHTML = Object.keys(el) + ' - ' + Object.values(el) + ' '
        li.appendChild(button)
        list.appendChild(li)
    })
};


function deleteTodo(date, task) {
    const todo = listGlobal.find(el => {
        // return Object.keys(el) == date && Object.values(el) == task 
        // non funziona perche Object.values(el) restituisce un array come Object.keys(el) e il confronto tra array non funziona
        //non funziona come atteso
        const key = Object.keys(el)[0];       // Prendi la prima (e unica) chiave dell'oggetto
        const value = Object.values(el)[0];   // Prendi il valore associato a quella chiave
        return key == date && value == task; // Confronta le chiavi e i valori come stringhe
    });
    const index = listGlobal.indexOf(todo)
    listGlobal.splice(index, 1)
    showTodo()
}

function addNewTodo() {
    const newTodo = document.getElementById('newTodoInput').value
    const todoDate = document.getElementById('todoDate').value
    console.log(newTodo, todoDate);
    if (newTodo === '') {
        alert('Devi inserire del testo')
        return
    }
    if (todoDate === '') {
        alert('Devi inserire una data')
        return
    }
    listGlobal.push({[todoDate]: newTodo})
    listGlobal.sort((a, b) => {
        return Object.keys(a) < Object.keys(b) ? -1 : 1
    })
    increment()
    // La funzione di confronto:

    // La funzione di confronto riceve due parametri, a e b, che rappresentano due elementi consecutivi dell'array che stai cercando di ordinare.
    // Confronto delle chiavi:

    // Per ogni oggetto in listGlobal, Object.keys(a) e Object.keys(b) restituiscono un array di tutte le chiavi dell'oggetto a e b rispettivamente.
    // La funzione di confronto confronta le prime chiavi di a e b (poiché stai utilizzando solo la prima chiave in questa implementazione).
    // Valori di ritorno:

    // Se la chiave di a è considerata "minore" della chiave di b (in termini di ordinamento lessicografico delle stringhe), la funzione restituisce -1.
    // In tutti gli altri casi, cioè se la chiave di a è "maggiore" o "uguale" alla chiave di b, la funzione restituisce 1.
    // Effetto sull'ordinamento:

    // Se la funzione di confronto restituisce un valore negativo (-1 in questo caso), l'elemento a viene posizionato prima di b nell'array ordinato.
    // Se la funzione restituisce un valore positivo (1 in questo caso), a viene posizionato dopo b.
    // Se la funzione restituisse 0, a e b verrebbero considerati equivalenti in termini di ordinamento, ma nel tuo esempio non hai gestito questo caso specifico.
    showTodo()
}


export { showTodo, addNewTodo}