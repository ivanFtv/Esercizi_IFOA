import './App.css'
import ButtonFunc from './components/ButtonFunc'
import ImageClass from './components/ImageClass'

function App() {
  const url = "https://picsum.photos/500/250"
  const tagAlt = "Immagine random"

  return (
    <>
      
      <h1>Esercizio IFOA</h1>

      <ButtonFunc buttonText="Testo custom" bgColor="red" />
      <br />
      <ImageClass url={url} tagAlt={tagAlt} />
      
    </>
  )
}

export default App
