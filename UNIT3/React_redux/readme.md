

STORE REDUX/////
stato = {
    nome: ''
    cognome: ''
    eta: ''
    via: ''
    stato: ''
}




ACTION//////
AGGIORNAMENTO ETA/////
{
    type: 'AGGIORNA_ETA',
    eta: 29
}

AGGIORNAMENTO NOME/////
{
    type: 'AGGIORNA_NOME',
    eta: 'Giovanni'
}


FUNZIONE PURA
function calcola(a, b) {
    return a+b
}


FUNZIONE INPURA
let numero = 0
function calcola(a) {
    return numero + a
}


AZIONE DISPACHATA
{
    type: 'INCREMENT',
    payload: 2
}



STATO ATTUALE DELLO STORE REDUX
store = {
    nome: 'Giulio',
    cognome: 'Rossi
    conteggio: 4
}

ESEMPIO REDUCER
export const mainReducer = (oldState = {}, action) {
    switch (action.type) {
        case: 'INCREMENT':
        return {
            ...oldState,
            eta: oldState.eta + action.payload
        }
    }
}

NUOVO STATO DELLO STORE REDUX IN USCITA DAL REDUCER
store = {
    nome: 'Giulio',
    cognome: 'Rossi'
    eta: 16
}


HOOK REDUX PER LEGGERE LO STATO DELLO STORE

COMPONENTE PROFILO
useSelector()

const nome = useSelector((state) => state.nome)
const cognome = useSelector((state) => state.cognome)
const age = useSelector((state) => state.eta)


Nome: {nome}
Nome: useSelector((state) => state.nome)

utilizzo e show dei dati in UI
<p>Nome: {nome}</p>
<p>Cognome: {cognome}</p>
<p>Eta: {age}</p>



HOOK REDUX PER MODIFICARE LO STATO DELLO STORE

useDispatch()



COMPONENTE
import {useDispatch} from 'react-redux'

const dispatch = useDispatch()

const [nome, setNome] = useState("")

const handleClick = () => {
    dispatch(aggiornaNome(nome))
}

<input type='text' placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
<button type="button" onClick={handleClick}>Salva dati</button>

AZIONE
{
    type: 'AGGIORNA_NOME',
    payload: 'Contenuto_input'
}