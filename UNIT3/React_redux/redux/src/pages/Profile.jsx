import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNome, setCognome, setEta, setAllData } from '../actions/utenteActions'
import { Link } from 'react-router-dom'

const Profile = () => {

    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        nome: useSelector(state => state.utente.nome),
        cognome: useSelector(state => state.utente.cognome),
        eta: useSelector(state => state.utente.eta),
    })

    // ESEMPIO DI CHIAMATA API CON FETCH PER AGGIORNARE EVENTUALI DATI A DATABASE
    // const postData = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title: 'foo',
    //             body: 'bar',
    //             userId: 1
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //     const data = await response.json()
    // }

    const handleChangeData = (tipoDiDato) => {
        switch (tipoDiDato) {
            case 'nome':
                dispatch(setNome(userData.nome))
                break;
            case 'cognome':
                dispatch(setCognome(userData.cognome))
                break;
            case 'eta':
                dispatch(setEta(userData.eta))
                break;
            default:
                break;
        }
    }

    const setAll = () => {
        dispatch(setAllData(userData))
    }

    return (
        <div>
            <h1>Profilo</h1>
            <div>
                <p>Ciao, {userData.nome} {userData.cognome}, sappi che hai {userData.eta} anni</p>
            </div>
            <div style={{ minWidth: '500px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <input type="text" value={userData.nome} onChange={(e) => setUserData({...userData, nome: e.target.value})}/>
                <button onClick={() => handleChangeData('nome')}>Aggiorna Nome</button>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <input type="text" value={userData.cognome} onChange={(e) => setUserData({...userData, cognome: e.target.value})}/>
                <button onClick={() => handleChangeData('cognome')}>Aggiorna Cognome</button>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <input type="text" value={userData.eta} onChange={(e) => setUserData({...userData, eta: e.target.value})}/>
                <button onClick={() => handleChangeData('eta')}>Aggiorna eta</button>
                </div>
            </div>
            <button onClick={setAll}>Aggiorna tutti i dati</button>
            <Link to="/">Torna alla home</Link>
        </div>
    )
}

export default Profile