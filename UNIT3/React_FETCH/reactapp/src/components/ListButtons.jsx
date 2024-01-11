import Button from 'react-bootstrap/Button'
import FantasyBooks from '../../json/fantasy.json';
import HistoryBooks from '../../json/history.json';
import HorrorBooks from '../../json/horror.json';
import RomanceBooks from '../../json/romance.json';
import SciFiBooks from '../../json/scifi.json';

const ListButtons = ({setList}) => {

    const categories = [
        {
            nome: 'Fantasy',
            data: FantasyBooks
        },
        {
            nome: 'History',
            data: HistoryBooks
        },
        {
            nome: 'Horror',
            data: HorrorBooks
        },
        {
            nome: 'Romance',
            data: RomanceBooks
        },
        {
            nome: 'SciFi',
            data: SciFiBooks
        }
    ]


    return (
        <div className="text-center py-4">
            {categories.map((category, index) => 
                <Button variant="outline-warning" className="mx-3" onClick={() => setList(category.data)} key={index}>{category.nome}</Button>
            )}
        </div>
    )
}

export default ListButtons