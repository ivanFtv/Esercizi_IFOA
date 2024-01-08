import { useState, useEffect } from "react"

const Button = (props, changePageTitle) => {

const [count, setCount] = useState(props.pippo)

const sendTitle = () => {
  props.changePageTitle("Cippirimerlo");
}

// useEffect(() => {
//   sendTitle();
// }, []);
  
// USEEFFECT SENZA DIPENDENZE = TRIGGERATO AL PRIMO RENDER DEL COMPONENTE
// useEffect(() => {
//   console.log("titolo cambiato");
// }, []);

// USEEFFECT CON DIPENDENZE = TRIGGERATO AL PRIMO RENDER DEL COMPONENTE E OGNI CAMBIAMENTO DELLA DIPENDENZA
// useEffect(() => {
//   console.log("titolo cambiato");
// }, [count]);


   const stileComp = {
      marginTop: '150px',
      paddingLeft: '50px',
   }

    return (
        <button style={stileComp} onClick={sendTitle} >
          Il conteggio e {count}
        </button>
    )
}

export default Button

