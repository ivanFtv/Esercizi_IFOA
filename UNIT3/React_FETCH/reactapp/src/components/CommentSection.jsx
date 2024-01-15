import { useEffect, useState } from 'react';
import NewBookRate from './NewBookRate';
import SingleComment from './SingleComment';
import SpinnerWait from './SpinnerWait';
import ErrorAlert from './ErrorAlert';

const CommentSection = ({asin}) => {

    const [comments, setComments] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    const postData = async (newComment) => {
        setLoading(true)
        try {
            const res = await fetch ('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body: JSON.stringify({...newComment, elementId: asin}),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE',
                },
            })
            if (res.ok) {
                console.log('ok');
                fetchData()
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

    const deleteComment = async (commentId) => {
        setLoading(true)
        try {
            const res = await fetch ('https://striveschool-api.herokuapp.com/api/comments/' + commentId, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE',
                },
            })
            if (res.ok) {
                console.log('ok');
                fetchData()
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

    const fetchData = async () => {
            setLoading(true)
            setError(false)
            try {
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
            {isError && <ErrorAlert />}
            {comments?.length > 0 
                ? comments.map((comment, index) => <SingleComment 
                                            deleteComment={deleteComment}
                                            comment={comment} 
                                            key={index}
                                            />) 
                : <p>Non ci sono commenti</p>}
                <NewBookRate 
                        postData={postData}
                        />
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