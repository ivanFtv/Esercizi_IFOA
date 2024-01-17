
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Main = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate('/risultati?cerca=' + search)
    }

    return (
        <div style={{ minHeight: "70vh"}} className="my-5 text-center">
            <h1>Benvenuto</h1>

            <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={handleSearch} className="btn btn-success">Cerca</button>
            
        </div>
    )
}

export default Main