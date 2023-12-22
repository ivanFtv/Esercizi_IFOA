import * as todoFunctions from "./todohandler.js";

document.getElementById('addTodo').addEventListener('click', todoFunctions.addNewTodo)    

todoFunctions.showTodo()

