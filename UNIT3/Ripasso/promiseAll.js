console.log('start');

const promise1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise1')
        }, 1000)
    })
}

const promise2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise2')
        }, 2000)
    })
}

const allPromiseResolved = async () => {
    const result = await Promise.all([
        promise1(), 
        promise2()
    ])
    console.log(result);
}

allPromiseResolved()
