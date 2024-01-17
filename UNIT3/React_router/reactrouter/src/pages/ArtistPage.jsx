import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Card, Button } from 'react-bootstrap'


const ArtistPage = () => {

    const [artist, setArtist] = useState({})

    const params = useParams()

    const fetchDataArtist = async () => {
        const resp = await fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + params.artistId)
        const data = await resp.json()
        setArtist(data)
    }

    useEffect(() => {
        fetchDataArtist()
    }, [])

    return (
        <div>
            {artist?.id && 
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={artist.picture_medium} />
            <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                <Card.Text>Numero fan: {artist.nb_fan}</Card.Text>
                <Button variant="outline-primary">Metti like</Button>
            </Card.Body>
            </Card>}
        </div>
    )
}


export default ArtistPage
