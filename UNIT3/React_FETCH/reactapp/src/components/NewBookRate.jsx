import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const NewBookRate = ({postData}) => {

    const [newComment, setComment] = useState({
        comment: '',
        rate: 0
    })

    const sendData = () => {
        postData(newComment)
    }

    return (
        <div className="p-2 border mt-2">
                <small>LASCIA UNA RECENSIONE</small>
                <Form.Control type="text" placeholder="Scrivi la recensione..." value={newComment.comment} onChange={(e) => setComment({...newComment, comment: e.target.value})} />  
                <Form.Select aria-label="Default select example" value={newComment.rate} onChange={(e) => setComment({...newComment, rate: e.target.value})}>
                    <option>Seleziona il voto</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </Form.Select>
                <Button variant="outline-primary" size="sm" className="mt-2" onClick={() => sendData()}>Invia</Button>
            </div>
    )
}

export default NewBookRate;