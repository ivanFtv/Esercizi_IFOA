import { useState } from 'react'
import data from './data'
import List from './components/List'

function App() {

  const [appointments, setAppointments] = useState(data)

  const reloadList = () => {
    setAppointments(data)
  }

  const removeAppointment = (id) => {
    setAppointments((actualAppointments) => actualAppointments.filter((item) => item.id !== id));
  }


  return (
    <section>
        <div className="container">
          <h2 style={{ color: "var(--bg-blue)" }}>Prossimi Appuntamenti</h2>
          <div className="people-list">
            <List data={appointments} removeAppointment={removeAppointment} />
          </div>
          <div className="btn-group">
            <button className="btn btn-reset" onClick={reloadList}>Ricarica Lista</button>
            <button className="btn btn-delete" onClick={() => setAppointments([])}>Cancella Tutto</button>
          </div>
        </div>
    </section>
  )
}

export default App
