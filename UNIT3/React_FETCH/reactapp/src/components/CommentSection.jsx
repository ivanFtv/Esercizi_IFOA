import { useEffect, useState } from 'react';
import NewBookRate from './NewBookRate';
import SingleComment from './SingleComment';
import SpinnerWait from './SpinnerWait';

const CommentSection = ({asin}) => {

    const [comments, setComments] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

     const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch ('https://striveschool-api.herokuapp.com/api/books/' + asin + '/comments', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE',
                    },
                })
                if (res.ok) {
                    let data = await res.json()
                    setComments(data)
                    setLoading(false)
                } else {
                    console.log('error')
                    setLoading(false)
                    setError(true)
                }
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(true)
            }
        }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div style={style}  className="rounded mx-auto">
            <h3>Commenti</h3>
            {isLoading && <SpinnerWait />}
            {/* {isError && <ErrorAlert />} */}
            {comments?.length > 0 
                ? comments.map((comment, index) => <SingleComment comment={comment} key={index}/>) 
                : <p>Non ci sono commenti</p>}
                <NewBookRate asin={asin}/>
        </div>
    )
}

const style = {
    width: '280px', 
    backgroundColor: '##E4E6E7',
    padding: '10px',
    border: '1px solid #ccc',
 }

export default CommentSection;