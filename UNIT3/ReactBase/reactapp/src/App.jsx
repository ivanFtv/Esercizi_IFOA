import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import ButtonClass from './components/ButtonClass'
import { useState, useEffect } from 'react'

function App() {
  const [newTitle, setNewTitle] = useState("Vite + React");

  const retrivePageTitle = (data) => {
    setNewTitle(data);
  }

  useEffect(() => {
    document.title = newTitle
  }, [newTitle]);

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
        <Button pippo={initialCounter} changePageTitle={retrivePageTitle}/>
        <ButtonClass pippo={initialCounter}/>
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
