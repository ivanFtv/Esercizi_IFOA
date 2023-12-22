import { todoList } from "./list.js";

// UNISCO LE DUE LISTE todoList e todoList2 CON GLI SPREAD OPERATOR
const todoList2 = [
    {"19:30": "Preparare cena"},
]

let listGlobal = [...todoList, ...todoList2];

const increment = (function () {
    let counter = 0

    return function() {
        counter++
        document.getElementById('counter').innerText = counter
    }
})()

 function showTodo() {
    const list = document.getElementById('list')
    list.innerHTML = ''
    listGlobal.forEach((el) => {
        const newLi = document.createElement('li')
        const newButton = document.createElement('button')
        newButton.innerText = 'X'
        newButton.addEventListener('click', () => {
            deleteTodo(Object.keys(el), Object.values(el))
        })
        newLi.innerHTML = Object.keys(el) + ' - ' + Object.values(el) + ' '
        newLi.appendChild(newButton)
        list.appendChild(newLi)
    })
}

function addNewTodo() {
    const newTodo = document.getElementById('newTodoInput').value
    const newTodoTime = document.getElementById('todoTime').value
    if (newTodo === '' || newTodoTime === '') {
        alert('Alcuni campi non sono completi')
        return
    }
    listGlobal.push({[newTodoTime]: newTodo})
    listGlobal.sort((a, b) => {
        return Object.keys(a) < Object.keys(b) ? -1 : 1
    })
    increment()
    showTodo()
}

function deleteTodo(date, task) {
    let tiHoBeccato = 0
    listGlobal.find((el, index) => {
        const key = Object.keys(el)[0]
        const value = Object.values(el)[0]
        if (key == date && value == task) {
            tiHoBeccato = index
        }
    })
    listGlobal.splice(tiHoBeccato, 1)
    showTodo()
}


export { 
    showTodo, 
    addNewTodo
}