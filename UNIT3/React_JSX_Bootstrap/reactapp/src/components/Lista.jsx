import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import ListButtons from './ListButtons';
import ListButtonsSuper from './ListButtonsSuper';
import FantasyBooks from '../../json/fantasy.json';
import HistoryBooks from '../../json/history.json';
import HorrorBooks from '../../json/horror.json';
import RomanceBooks from '../../json/romance.json';
import SciFiBooks from '../../json/scifi.json';

const Lista = () => {
    const [list, setList] = useState([]);

    // const categories = ['fantasy', 'history', 'horror', 'romance', 'scifi']
    const categories = ['Fantasy', 'History', 'Horror', 'Romance', 'Scifi', 'Astronomia', 'Cucina']


    return (
        <>
            <ListButtons setList={setList} />
            <ListButtonsSuper categories={categories} setList={setList}/>

            {/* <div className="text-center my-3">
                <Button variant="outline-warning" className="mx-3" onClick={() => setList(FantasyBooks)}>Fantasy</Button>
                <Button variant="outline-warning" className="mx-3" onClick={() => setList(HistoryBooks)}>History</Button>
                <Button variant="outline-warning" className="mx-3" onClick={() => setList(HorrorBooks)}>Horror</Button>
                <Button variant="outline-warning" className="mx-3" onClick={() => setList(RomanceBooks)}>Romance</Button>
                <Button variant="outline-warning" className="mx-3" onClick={() => setList(SciFiBooks)}>SciFi</Button>
            </div> */}

            <div className="d-flex justify-content-between flex-wrap">
            {list.map((book) => 
                <Card style={{ width: '18rem' }} className="my-2" key={book.asin}>
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