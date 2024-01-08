import { useState } from "react"

const Button = (props) => {

  const [count, setCount] = useState(props.pippo);

  // COME STILIZZARE UN COMPONENTE IN REACT
  // RICORDARSI CHE NON SI UTILIZZANO TRATTINI MA CAMEL CASE
   const stileComp = {
      marginTop: '150px',
      paddingLeft: '50px',
   }

    return (
      // NEL COMPONENTE POI DEVO PASSARE LO STYLE TRA GRAFFE
      // SE LO VOLESSI FARE IN-LINE DEVO METTERE 2 GRAFFE {{marginTop: '150px'}}
        <button style={stileComp} onClick={() => setCount((count) => count +1)} >
          Conteggio = {count}
        </button>
    )
}

export default Button

