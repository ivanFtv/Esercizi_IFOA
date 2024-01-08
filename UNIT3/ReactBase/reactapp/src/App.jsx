import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonFunction from './components/ButtonFunction'
import ButtonChangeTitle from './components/ButtonChangeTitle'
import ButtonClass from './components/ButtonClass'
import { useState, useEffect } from 'react'
// USESTATE E USEEFFECT SONO HOOK DI REACT E SI UTILIZZANO PER GESTIRE LO STATO DI UN COMPONENTE
// SI CHIAMANO PROPRIO COSI E VANNO IMPORTATI DA REACT

function App() {

  const [pageTitle, setPageTitle] = useState("Vite + React");

  const retrivePageTitle = (newTitle) => {
    setPageTitle(newTitle);
  }

  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle]);

  const initialCounter = 5;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ButtonFunction pippo={initialCounter}/>
        <ButtonClass pippo={initialCounter}/>
        {/* PER CAMBIARE IL TITOLO DELLA PAGINA DEVO PASSARE UN DATO DAL FIGLIO AL PADRE E LO FACCIO CON UNA CALLBACK */}
        <ButtonChangeTitle changePageTitle={retrivePageTitle} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
