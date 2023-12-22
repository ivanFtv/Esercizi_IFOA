import * as pippo from "./todoFunctions.js"
// import { showTodo, deleteTodo } from "./todoFunctions.js"

document.getElementById('addTodo').addEventListener('click', pippo.addNewTodo)

pippo.showTodo()