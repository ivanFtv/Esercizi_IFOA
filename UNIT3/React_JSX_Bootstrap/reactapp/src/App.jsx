
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarDark from './components/NavBarDark';
import FooterDark from './components/FooterDark';
import Main from './components/Main';
import { useEffect, useState } from 'react';

function App() {

  const [title, setTitle] = useState('Libreria del Centro')

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <>
      <NavBarDark />
      <Main setPageTitle={setTitle}/>
      <FooterDark />
    </>
  )
}

export default App
