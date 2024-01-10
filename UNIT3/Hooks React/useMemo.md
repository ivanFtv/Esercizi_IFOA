// useMemo viene utilizzato per memorizzare dei dati
// in modo che possano essere riutilizzata tra renderizzazioni senza doverli ricalcore ogni volta.

function calcolaTotalone() {
    //calcolo complesso
}


const calcoloMemorizzato = useMemo(()=> calcolaTotalone(), []);