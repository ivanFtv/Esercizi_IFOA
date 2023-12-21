// let arr = [1, 2, 3,, 5, 6, 7, 8, 9];

let arr = {
    0: "uno",
    1: "due",
    2: "tre",
    4: "quattro",
    5: "cinque",
    6: "sei",
    7: "sette",
    8: "otto",

}


for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}
// In javascript gli oggetti non hanno la proprietà length, quindi non è possibile utilizzare il for per scorrere gli elementi di un oggetto. 
// Per scorrere gli elementi di un oggetto si può utilizzare il for in.
for (let i = 0; i <= 7; i++) {
    console.log(arr[i]);
}

for (let el of arr) {
    console.log(el);
}

for (let el in arr) {
    console.log(arr[el]);
}

arr.forEach((el) => {
    console.log(el);
})

// OGGETTI ITERABILI SOLO CON
// Iterazione sulle chiavi
for (let key of Object.keys(obj)) {
    console.log(key);
}

// Iterazione sui valori
for (let value of Object.values(obj)) {
    console.log(value);
}

// Iterazione su chiavi e valori
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}