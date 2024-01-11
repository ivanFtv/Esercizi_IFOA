import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import CommentSection from './CommentSection';

const SingleCard = ({book}) => {

    const [selected, setSelected] = useState(false)

    return (
        <>
        <div className="d-flex flex-column">
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
        {selected && <CommentSection asin={book.asin}/>}
        </div>
        </>
    )
}


export default SingleCard;