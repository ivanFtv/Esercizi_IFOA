fetch(url)
    .then((response) => response.json())
    .catch((error) => {
        console.log(error)
        // ALTRO CODICE DI GESTIONE ERRORE
    })

    // DICHIARO LA FUNZIONE ASINCRONA CON RITORNO DI PROMISE PROPRIO COME NEL PRIMO ESEMPIO
    function getJson() {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => response.json())
                .then((json) => resolve(json))
                .catch((error) => reject(error))
        })
    }


    // SINTASSI CON ASYNC AWAIT 
async function getJson() {
    try {
        const response = await fetch(url)
        const json = await response.json()
    } catch (error) {
        console.log(error)
        // ALTRO CODICE DI GESTIONE ERRORE
    }
}
