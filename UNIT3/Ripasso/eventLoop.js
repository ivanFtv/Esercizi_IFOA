function uno() {
    console.log('uno');
}

// function due() {
//     setTimeout(() => {
//         console.log('due');
//     }, 0);
// }

const due = new Promise((resolve, reject) => {
    resolve('due');
});

function tre() {
    console.log('tre');
}

uno();
due.then((res) => {
    console.log(res);
});
tre();