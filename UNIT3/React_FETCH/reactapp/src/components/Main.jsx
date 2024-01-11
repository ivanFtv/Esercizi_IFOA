import { Container, Row } from 'react-bootstrap'
import Jumbotron from './Jumbotron'
import Lista from './lista'

const Main = ({setPageTitle}) => {

    const retriveTitle = (newTitle) => {
        setPageTitle(newTitle)
    }

    return (
        <Container style={{ minHeight: '85vh' }}>
            <Row>
                <Jumbotron />
            </Row>
            <Row>
                <Lista retriveTitle={retriveTitle}/>
            </Row>
      </Container>
    )
}

export default Main