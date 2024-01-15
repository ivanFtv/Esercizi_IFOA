import { useState } from 'react'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <section className="section-center">
          <h3>Gelateria Tutto-Ciocco</h3>
          <Menu />
        </section>
      </div>
    </>
  )
}

export default App
