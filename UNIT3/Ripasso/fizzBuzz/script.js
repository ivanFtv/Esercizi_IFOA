const arr = [3, 4, 5, 9, 10, 15, 21, 25, 30, 50];


function fizzBuzz(arr) {
    arr.forEach(num => {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log('Tizz');
        }

        else if (num % 3 === 0) {
            console.log('Fizz');
        }

        else if (num % 5 === 0) {
            console.log('Buzz');
        }

        else {
            console.log(num.toString());
        }
    })
}

fizzBuzz(arr)