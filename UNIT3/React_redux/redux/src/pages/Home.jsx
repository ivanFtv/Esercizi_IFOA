import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {

    const nome = useSelector(state => state.utente.nome)
    const cognome = useSelector(state => state.utente.cognome)
    const eta = useSelector(state => state.utente.eta)

    return (
        <div>
            <h1>Home</h1>
            <div>
                <p>Ciao, {nome} {cognome}, sappi che hai {eta} anni</p>
                <Link to="/profile">Vai la tuo profilo</Link>
            </div>
        </div>
    )
}

export default Home