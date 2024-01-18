import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { REMOVE_FAVORITE } from "../actions/favoriteActions";


const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.list)

    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Preferiti</h1>
                    <Button variant="outline-primary" onClick={() => navigate("/")} >Ritorna alla Home</Button>
                </Col>
                <Col>
                    <ListGroup>
                        {favorites.length > 0 ? (
                            favorites.map((fav, index) => (
                            <ListGroup.Item key={index}>
                                <Button variant="outline-danger" onClick={() => dispatch({ type: REMOVE_FAVORITE, payload: fav })}>Elimina</Button>
                                {fav}
                            </ListGroup.Item>
                        ))
                        ) : (
                            <ListGroup.Item>Non ci sono preferiti</ListGroup.Item>
                        )}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )

}

export default Favorites;