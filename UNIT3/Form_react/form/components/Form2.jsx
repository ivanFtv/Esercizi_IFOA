import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';


function Form2() {
  
  const [persona, setPersona] = useState({
    nome: '',
    cognome: '',
    via: '',
    paese: '',
    telefono: '',
    email: ''
  });
  
  const [lavoro, setLavoro] = useState({
    azienda: '',
    indirizzo: '',
    citta: '',
    telefono: '',
    email: ''
  });

  const resetForm = () => {
    setPersona({
      nome: '',
      cognome: '',
      via: '',
      paese: '',
      telefono: '',
      email: ''
      });
      setLavoro({
      azienda: '',
      indirizzo: '',
      citta: '',
      telefono: '',
      email: ''
      });
    }
  
  const handlerSubmit = () => {
   console.log(persona, lavoro);
  }

// useEffect(() => {
//     console.log(persona, lavoro);
// }, [persona, lavoro]);

  return (
    <>
    <form>
      <div>
        <label>
          Nome: 
          <input type="text" value={persona.nome} onChange={(e) => setPersona({...persona, nome: e.target.value})} />
        </label>
        <br />
        <label>
          Cognome: 
          <input type="text" min="18" max="99" value={persona.cognome} onChange={(e) => setPersona({...persona, cognome: e.target.value})} />
        </label>
      </div>
      <div>
        <label>
          Via: 
          <input type="text" value={persona.via} onChange={(e) => setPersona({...persona, via: e.target.value})} />
        </label>
        <br />
        <label>
          Paese: 
          <input type="text" value={persona.paese} onChange={(e) => setPersona({...persona, paese: e.target.value})} />
        </label>
      </div>
      <div>
        <label>
          Telefono: 
          <input type="text" value={persona.telefono} onChange={(e) => setPersona({...persona, telefono: e.target.value})} />
        </label>
        <br />
        <label>
          Email: 
          <input type="text" value={persona.email} onChange={(e) => setPersona({...persona, email: e.target.value})} />
        </label>
      </div>
      <hr />
      <div>
        <label>
          Azienda: 
          <input type="text" value={lavoro.azienda} onChange={(e) => setLavoro({...lavoro, azienda: e.target.value})} />
        </label>
        <br />
        <label>
          Indirizzo: 
          <input type="text" value={lavoro.indirizzo} onChange={(e) => setLavoro({...lavoro, indirizzo: e.target.value})} />
        </label>
        <br />
        <label>
          Citta: 
          <input type="text" value={lavoro.citta} onChange={(e) => setLavoro({...lavoro, citta: e.target.value})} />
        </label>
        <br />
        <label>
          Telefono: 
          <input type="text" value={lavoro.telefono} onChange={(e) => setLavoro({...lavoro, telefono: e.target.value})} />
        </label>
        <label>
          Email: 
          <input type="text" value={lavoro.email} onChange={(e) => setLavoro({...lavoro, email: e.target.value})} />
        </label>
      </div>
      <button type='button' onClick={handlerSubmit}>Invia</button>
    </form>
    <button onClick={()=> setPersona({...persona, nome: 'Cippirimerlo'})}>
      Cambia nome persona
    </button>
    </>
  );
}

export default Form2;
