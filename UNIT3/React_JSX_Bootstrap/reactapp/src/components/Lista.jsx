import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import ListButtons from './ListButtons';

const Lista = () => {
    const [list, setList] = useState([]);

    return (
        <>
            <ListButtons setList={setList} />

            <div className="d-flex justify-content-between flex-wrap">
            {list.map((book) => 
                <Card style={{ width: '18rem' }} key={book.asin}>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>
                        {book.asin + ' - ' + book.price}
                        </Card.Text>
                        <Button variant="primary">Acquista</Button>
                    </Card.Body>
                </Card>
            )}
            </div>
        </>
    )
};

export default Lista;