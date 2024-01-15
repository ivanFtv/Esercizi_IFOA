ELEVAZIONE DI STATO:
Dato che non e possibile condividere dati tra componenti sullo stesso livello (fratelli) per avere uno share di dati o un re-render
la soluzione migliore e' elevare (spostare) lo stato o funzioni ad un livello piu alto (padre comune piu prossimo) affinche possiamo


COMPONENTI CLASSE
differenze tra componenti funzione e componenti classe
- metodo render()
- metodo componentDidUpdate()
- gestione dello stato


CICLO DI VITA
In un componente React possiamo agganciarci ai 3 principali stati di vita del componente (mount, update, unMount) con:
- componentDidMount o useEffect senza dipendenze 
- componentDidUpdate o useEffect con dipendenza lo stato o li stati da sovregliare
- componentDidUnmount o useEffect con ritorno di funzione


NAMED EXPORT VS EXPORT DEFAULT
- export default => (es. export default ListComponent alla fine del file)
ci permette di esportare da un foglio JS una singola cosa, e quando la importiamo possiamo chiamarla come vogliamo


- named export => (es. aggiungere export davanti a una funzione, variabile ecc)
ci permette di esportare piu oggetti da un singolo file, ma in importazione dobbiamo wrappare i nomi tra graffe e usare obbligatoriamente i nomi esatti delle funzioni