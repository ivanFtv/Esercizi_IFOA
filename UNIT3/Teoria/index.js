// var => scope funzione

// let/const => scope blocco

// for (i = 0; i < 10; i++) {
//     console.log(i);
// }


// const a = 1;

// function uno() {
//     console.log(a);
// };
// uno();
//altro codice 

// var nome = 'Mario';

// function saluta() {
//     let nome = 'Giovanni';
//     console.log(this.nome);
// }

// saluta();


// class Esempio {
//     constructor() {
//         this.nome = 'Mario';
//     }
//     saluta() {
//         console.log(this.nome);
//     }
// }

// class Esempio2 extends Esempio {
//     constructor() {
//         super();
//         this.nome = 'Giovanni';
//     }
// }

// const esempio2 = new Esempio2();
// esempio2.saluta();

// console.log(this.nome);


// const persona = {
//     nome: 'Mario',
//     cognome: 'Rossi',
//     eta: 30,
//     saluta: function () {
//         console.log(this);
//     }
// }

// persona.saluta();

// MODO UNO
// const myObj = {
//     value: 42,
//     myMet: function () {
//         const pluto = this;
//         setTimeout(function () {
//             console.log(pluto.value);
//         }, 1000);
//     }
// }


// MODO DUE
// const myObj2 = {
//     value: 42,
//     myMet: function () {
//         setTimeout(function () {
//             console.log(this.value);
//         }.bind(this), 1000);
//     }
// }


// const myObj3 = {
//     value: 42,
//     myMet: function () {
//         setTimeout(function () {
//             console.log(this.value);
//         }.bind(this), 1000);
//     }
// }

// myObj.myMet();

// const arr = [1, 2, 3, 4, 5];
















// UNA CLASSE PRENDA COME PARAMETRO OPZIONALE UN ARRAY DI NUMERI 
// DEVO CONTROLLARE CHE MI ARRIVI UN ARRAY O MENO 
// SE MI ARRIVA VOGLIO CHE SUCCEDA QUESTO:

// SE UN NUMERO E DIVISIBILE PER 3 STAMPO PIPPO 
// SE UN NUMERO E DIVISIBILE PER 5 STAMPO PLUTO
// SE UN NUMERO E DIVISIBILE SIA PER 3 CHE PER 5 STAMPO PAPERINO
// SE UN NUMERO NON E DIVISIBILE PER NESSUNO DEI DUE STAMPO IL NUMERO IN FORMATO STRINGA



// class PippoPlutoTopolino {
//     constructor (arr) {
//         this.numbers = arr;
//     }
//     check() {
//         this.numbers.forEach(number => {
//             if (number % 3 === 0 && number % 5 ===0) {
//                 console.log('PAPERINO');
//             } else if (number % 3 === 0) {
//                 console.log('PIPPO')
//             } else if (number % 5 === 0) {
//                 console.log('PLUTO')
//             } else {
//                 console.log(number.toString());
//             }
//         })
//     }
// }


// check(test.numbers)

// console.log(test.hasOwnProperty('numbers'));
// if (PippoPlutoTopolino.hasOwnProperty('numbers')) {
//     test.check();
// } else {
//     console.log('Non ho i numeri deficente');
// }

// document.getElementById('button').addEventListener('click', test);

// function test() {
//     return function () {
//         console.log('ciao');
//         }
// }


// querySelector('.class')

// querySelectorAll('.class')


// for => posso definire una fine
// forEach => itera tutti gli elementi dell'array

// for..in => itera tutti gli indici dell'array e/o oggetto (10, 11, 12, 13, 14, 15, 16, 17, 18, 19)
// for..of => itera tutti gli elementi dell'array (1, 2, 3, 4, 5, 6, 7, 8, 9, 10) SOLO ARRAY

// const arr = [1, 2, 3, 4,, 6, 7, 8, 9];

// const arr = {
//     10: 'ciao1',
//     11: 'ciao2',
//     12: 'ciao3',
//     13: 'ciao4',
//     14: 'ciao5',
//     15: 'ciao6',
//     16: 'ciao7',
//     17: 'ciao8',
//     18: 'ciao9',
//     19: 'ciao10',
// }


// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach((item, index) => {
//     console.log(index, item);
// })

// for (el in arr) {
//     console.log(el);
// }

// for (el of arr) {
//     console.log(el);
// }





// console.log('start')

// const promise1 = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('promise1');
//         }, 1000);
//     })
// }

// const promise2 = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('promise2');
//         }, 2000);
//     })
// }

//  const allPromiseResolved = async () => {
//     const result = await Promise.all([
//         promise1(),
//         promise2(), 
//     ])
//     console.log(result);
// }

// export{ promise1, promise2, allPromiseResolved};

// export function print() {
//     console.log('ciao, sono imnportato');
// }


// const numbers = [1, 2, 3, 4, 5];

// const [first, second, ...rest, five] = numbers;

// console.log(numbers);

// console.log(first, second, rest);

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];


// const numbersCombined = [...numbersOne, ...numbersTwo];


// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
  
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow'
//   }
  
//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

//   console.log(myUpdatedVehicle);


// const myOby = {
//     myname: 'Mario',
//     lastname: 'Rossi',
//     age: 30,
//     city: 'Roma',
//     country: 'Italia'
// }

// // let { var1, var2 } = myOby;
// if (myOby.hasOwnProperty('myname')) {
//     let { myname, age, ...pippo} = myOby;
//     console.log(myname, age, pippo);
// } else {
//     log('non ho myname');
// }

// NPM = node package manager


// CREARE UN PROGETTINO BASATO SU UNA PAGINA HTML
// USARE IMPORT PER UNIRE UN FILE FUNCTIONS.JS A MAIN.JS

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// CLOSURE
// let var1 = 3;

// function test() {
//     let var1 = 3;
//     return var1 + 2;
// }


// function test2() {
//     return var1 + 2;
// }


// let counter = 0;

// function incrementa() {
//     let counter = 0;

//     function plus() {
//         counter += 2;
//     };

//     plus();

//     console.log(counter);
// }
// function add(counter) {
//     return counter += 1;
// }

// const incrementa = (function() {
//     let counter = 0;
//     return add(counter);
// })();



// incrementa();
// incrementa();
// incrementa();
// incrementa();




// MAP / FILTER /REDUCE

// const students = [
//     { name: 'Mario', year: 7 },
//     { name: 'Giovanni', year: 4 },
//     { name: 'Luca', year: 3 },
//     { name: 'Marco', year: 2 },
//     { name: 'Paolo', year: 1},
//     { name: 'Sabrina', year: 3 },
// ]

// arr.map() 
// itera su tutto un array e ritorna un nuovo array modificato in base alla callback che gli passo

// const mapStudent = students.map((el, index) => {
//     return index + '-' + el.name + ': ' + el.year;
// })

// console.log(students);
// console.log(mapStudent);


//////////////////////////////////////////////////////////////////////////////////////////////////////////


// arr.filter()
//itera tutto l'array e restituisce un nuovo array con i vaolri che soddisfano la condizione della callback


// const mapStudent = students.filter((el) => {
//     return el.year === 9
// })

// console.log(students);
// console.log(mapStudent);



//////////////////////////////////////////////////////////////////////////////////////////////////////////


// arr.reduce()
// Itera su tutto l'array e restituisce un unico valore in base alla funzione passata come callback

// const numeri = [1, 2, 3, 4, 5];

// const somma = numeri.reduce((acc, el) => {
//     return acc + el;
// }, 0)

// console.log(somma);

// const groupedStudents = students.reduce((acc, student) => {
//     const { year } = student;

//     if (!acc[student.year]) {
//         acc[year] = [];
//     }

//     acc[year].push(student);

//     return acc;
// }, {})


// console.log(groupedStudents);


//////////////////////////////////////////////////////////////////////////////////////////////////////////


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((dati) => {
//         funzioneCheElaboraDati(dati)
//         altraFunzioneCheElboraDati2(dati)
//     })

//     function funzioneCheElaboraDati(dati) {
//         return new Promise((resolve, reject) => {
//             resolve(dati)
//         })
//     }

    // https://www.mioprogetto.com/utenti?id=634&nome=marco&cognome=rossi&eta=30
    const url = new URL('https://www.mioprogetto.com/utenti?id=634&nome=marco&cognome=rossi&eta=30');

    const pippo = new URLSearchParams(window.location.search);
    const id = pippo.get('id');
    const nome = pippo.get('nome');
    const cognome = pippo.get('cognome');
    const eta = pippo.get('eta');

    console.log(id, nome, cognome, eta);


    











