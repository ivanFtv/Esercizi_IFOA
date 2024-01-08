
const Button = (props, changePageTitle) => {

const sendTitle = () => {
  props.changePageTitle("Cippirimerlo");
}

   const stileComp = {
      marginTop: '150px',
      paddingLeft: '50px',
   }

    return (
        <button style={stileComp} onClick={sendTitle} >
          Cambia Titolo Pagina
        </button>
    )
}

export default Button

