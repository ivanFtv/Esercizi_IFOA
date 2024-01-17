
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"


const SearchResults = () => {
    
    const location = useLocation()
    const searchTerms = new URLSearchParams(location.search).get('cerca')


    const [search, setSearch] = useState("")
    const [songs, setSongs] = useState([])

    const fetchData = async () => {
        const resp = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + search)
        const data = await resp.json()
        setSongs(data.data)
    }

    useEffect(() => {
        if (searchTerms?.length > 2)
            setSearch(searchTerms)
    }, [])

    useEffect(() => {
        if (search?.length > 2)
        fetchData()
    }, [search])


    return (
        <>
            <div style={{ minHeight: "70vh"}} className="my-5 text-center">
                <h1>Risultati ricerca</h1>
                <ul>
                {songs?.length > 0 && songs.map((song) => 
                    <li key={song.id}>{song.title} - {(song.duration/100).toFixed(2)} - <Link to={`/artist/${song.artist.id}`}>Scheda Artista</Link></li>
                    )
                }
                </ul>
            </div>
        </>
    )
}


export default SearchResults
