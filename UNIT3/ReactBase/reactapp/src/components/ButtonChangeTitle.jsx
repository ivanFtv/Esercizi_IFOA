
const Button = (props) => {

  const sendTitle = () => {
    props.changePageTitle("Cippirimerlo");
  }

    const stileComp = {
        border: '1px solid black',
    }

      return (
          <button onClick={sendTitle} >
            Cambia Titolo Pagina
          </button>
      )
  }

export default Button

