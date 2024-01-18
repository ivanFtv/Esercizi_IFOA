import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../actions/favoriteActions'

const Job = ({ data }) => {

  const dispatch = useDispatch()

  return (
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={3}>
          <Button 
            variant="outline-success"
            onClick={() => dispatch(addFavorite(data.title))}
          >
            Aggiungi preferito
            </Button>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      </Row>
  )
}

export default Job
