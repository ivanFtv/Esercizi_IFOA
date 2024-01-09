
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarDark from './components/NavBarDark';
import FooterDark from './components/FooterDark';
import {Container, Row, Col} from 'react-bootstrap/';
import Jumbotron from './components/Jumbotron';
import Lista from './components/lista';

function App() {

  return (
    <>
      <NavBarDark />
      <Container style={{ minHeight: '85vh' }}>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
          <Lista />
        </Row>
      </Container>
      <FooterDark />
    </>
  )
}

export default App
