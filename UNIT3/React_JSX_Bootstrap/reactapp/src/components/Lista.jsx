import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import ListButtons from './ListButtons';
import { useEffect } from 'react';
import SingleCard from './SingleCard';

const Lista = ({retriveTitle}) => {
    const [list, setList] = useState([]);
    const [listFiltered, setListFiltered] = useState([]);

    const categories = ['fantasy', 'history', 'horror', 'romance', 'scifi']
    // const categories = ['Fantasy', 'History', 'Horror', 'Romance', 'Scifi', 'Astronomia', 'Cucina']

    function handleSearch(event) {
        let value = new RegExp(event.target.value, 'i') // 'i' = 'case insensitive
        const actualState = list
        const result = actualState.filter((book) => {
            return value.test(book.title)
        })
        setListFiltered(result)
    }

    useEffect(() => {
        setListFiltered(list)
        retriveTitle(list[0] ? 'Categoria ' + list[0].category : 'Tutte le Categorie')
    }, [list])

    return (
        <>
            <input type="text" onChange={handleSearch}/>
            <ListButtons setList={setList} />
            {/* <ListButtonsSuper categories={categories} setList={setList}/> */}

            {/* <div className="text-center my-3">
                <Button variant="outline-warning" className="mx-3" onClick={() => setList(FantasyBooks)}>Fantasy</Button>
                <Button variant="outline-warning" className="mx-3" onClick={() => setList(HistoryBooks)}>History</Button>
                <Button variant="outline-warning" className="mx-3" onClick={() => setList(HorrorBooks)}>Horror</Button>
                <Button variant="outline-warning" className="mx-3" onClick={() => setList(RomanceBooks)}>Romance</Button>
                <Button variant="outline-warning" className="mx-3" onClick={() => setList(SciFiBooks)}>SciFi</Button>
            </div> */}

            <div className="d-flex justify-content-between flex-wrap">
            {listFiltered.map((book) => 
                <SingleCard book={book} key={book.asin} />
                // VECCHIO SISTEMA DI GESTIONE SCHEDE
                // <Card style={{ width: '18rem' }} className="my-2" key={book.asin}>
                //     <Card.Img variant="top" src={book.img} />
                //     <Card.Body>
                //         <Card.Title>{book.title}</Card.Title>
                //         <Card.Text>
                //         {book.asin + ' - ' + book.price}
                //         </Card.Text>
                //         <Button variant="primary">Acquista</Button>
                //     </Card.Body>
                // </Card>
            )}
            </div>
        </>
    )
};

export default Lista;