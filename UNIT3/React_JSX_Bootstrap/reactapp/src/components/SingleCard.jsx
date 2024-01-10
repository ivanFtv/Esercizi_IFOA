import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';

const SingleCard = ({book}) => {

    const [selected, setSelected] = useState(false)

    const cardSelected = {
        border: '4px solid red',
        borderRadius: '10px',
        width: '18rem'
    }

    return (
        <Card style={{width: '18rem', border: selected && '4px solid red'}} className="my-2" key={book.asin}>
            <Card.Img variant="top" src={book.img} onClick={() => setSelected(!selected)} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                {book.asin + ' - ' + book.price}
                </Card.Text>
                <Button variant="primary">Acquista</Button>
            </Card.Body>
        </Card>
    )
}


export default SingleCard;